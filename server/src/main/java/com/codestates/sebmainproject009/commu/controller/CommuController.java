package com.codestates.sebmainproject009.commu.controller;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.comment.service.CommentService;
import com.codestates.sebmainproject009.commu.dto.CommuPatchDto;
import com.codestates.sebmainproject009.commu.dto.CommuPostDto;
import com.codestates.sebmainproject009.commu.dto.CommuResponseDto;
import com.codestates.sebmainproject009.commu.dto.CommuResponsesDto;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.mapper.CommuMapper;
import com.codestates.sebmainproject009.commu.service.CommuService;
import com.codestates.sebmainproject009.response.MultiResponseDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/commu")
public class CommuController {
    private final CommuService commuService;
    private final CommuMapper mapper;
    private final CommentService commentService;

    private final JwtTokenizer jwtTokenizer;

    @Value("${cloud.aws.credentials.accessKey}")
    String accessKey;
    @Value("${cloud.aws.credentials.secretKey}")
    String secretKey;
    String region = "ap-northeast-2";
    String bucketName = "dowajoyak.link";


    public CommuController(CommuService commuService, CommuMapper mapper, CommentService commentService, JwtTokenizer jwtTokenizer) {
        this.commuService = commuService;
        this.mapper = mapper;
        this.commentService = commentService;
        this.jwtTokenizer = jwtTokenizer;
    }

    @PostMapping("/posts")
    public ResponseEntity postCommu(@RequestBody CommuPostDto commuPostDto) {
        Commu commu = commuService.createCommu(commuPostDto);

        return new ResponseEntity<>(mapper.commuToCommuResponseDto(commu), HttpStatus.CREATED);

    }


    @PostMapping(value = "/postsToS3", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity postCommu(@RequestParam("image") @Nullable MultipartFile image,
                                    @RequestParam("title") String title,
                                    @RequestParam("content") String content,
                                    @RequestParam("userId") Long userId) {
        // 이미지 업로드 및 S3 URL 가져오는 로직
        String imageUrl=null;
        if(image != null)
            imageUrl = uploadImageToS3(image);

        // CommuPostDto에 이미지 URL 설정
        Commu commu = commuService.createCommuCustom(title, content, imageUrl, userId);


        return new ResponseEntity<>(mapper.commuToCommuImageResponseDto(commu), HttpStatus.CREATED);
    }


    public String uploadImageToS3(MultipartFile image) {
        // AWS 계정 정보 설정


        // S3 클라이언트 생성
        AmazonS3 s3Client = AmazonS3ClientBuilder.standard()
                .withRegion(region)
                .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials(accessKey, secretKey)))
                .build();

        try {
            // 업로드할 이미지 파일의 이름 생성
            String fileName = generateFileName(image.getOriginalFilename());

            // 이미지 파일을 로컬에 저장
            Path tempFile = Files.createTempFile(fileName, "");
            image.transferTo(tempFile.toFile());

            // S3에 이미지 업로드
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, fileName, tempFile.toFile());
            s3Client.putObject(putObjectRequest);

            // 업로드된 이미지의 URL 생성
            String imageUrl = "https://" + bucketName + ".s3." + region + ".amazonaws.com/" + fileName;

            return imageUrl;
        } catch (IOException e) {
            // 업로드 실패 처리
            e.printStackTrace();
            return null;
        } finally {
            // S3 클라이언트 종료
            s3Client.shutdown();
        }
    }
    private String generateFileName(String originalFilename) {
        String extension = originalFilename.substring(originalFilename.lastIndexOf("."));
        String uniqueFileName = UUID.randomUUID().toString().replace("-", "");
        return uniqueFileName + extension;
    }

    @GetMapping("/all")
    public ResponseEntity getCommuAll(){
        List<Commu> commuList = commuService.findCommuList();
        return new ResponseEntity<>(mapper.commuListToCommuResponsesDtoList(commuList), HttpStatus.OK);
    }


    @GetMapping()
    public ResponseEntity getCommus(@RequestParam(required = false, defaultValue = "1") int page,
                                    @RequestParam(required = false, defaultValue = "6") int size) {
        Page<Commu> commuPage = commuService.findCommus(page - 1, size);
        List<Commu> commuList = commuPage.getContent();

        MultiResponseDto<List<CommuResponsesDto>> multiResponseDto = new MultiResponseDto<>(mapper.commuListToCommuResponsesDtoList(commuList), commuPage);

        return new ResponseEntity<>(multiResponseDto, HttpStatus.OK);

    }

    @GetMapping("/{commuId}")
    public ResponseEntity getCommu(@PathVariable long commuId){
        Commu commu = commuService.findCommu(commuId);

        CommuResponseDto commuResponseDto = mapper.commuToCommuResponseDto(commu);

        commuResponseDto.setComments(commu.getComments());

        return new ResponseEntity<>(commuResponseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commuId}")
    public ResponseEntity patchCommu(@PathVariable long commuId,
                                     @RequestBody CommuPatchDto commuPatchDto,
                                     @RequestHeader("Authorization") String authorizationHeader){

        String token = jwtTokenizer.extractTokenFromHeader(authorizationHeader);

        Long userId;
        if(token != null){
            userId = jwtTokenizer.extractUserIdFromToken(token);
        }else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        if(userId != null && commuService.isSameWriter(userId, commuId)){

            Commu commu = commuService.updateCommu(mapper.commuPatchDtoToCommu(commuPatchDto));


            return new ResponseEntity<>(mapper.commuToCommuResponseDto(commu), HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);

    }

    @DeleteMapping("/{commuId}")
    public ResponseEntity deleteCommu(@PathVariable long commuId,
                                      @RequestHeader("Authorization") String authorizationHeader){
        String token = jwtTokenizer.extractTokenFromHeader(authorizationHeader);

        Long userId;

        if(token != null){
            userId = jwtTokenizer.extractUserIdFromToken(token);
        }else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        if(userId != null && commuService.isSameWriter(userId, commuId)){
            commentService.deleteCommentsByCommuId(commuId);
            commuService.deleteCommu(commuId);

            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);


    }



}