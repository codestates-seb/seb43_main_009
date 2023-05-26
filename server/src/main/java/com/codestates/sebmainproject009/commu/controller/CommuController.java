package com.codestates.sebmainproject009.commu.controller;

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
import com.codestates.sebmainproject009.s3.client.CustomS3Client;
import com.codestates.sebmainproject009.user.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/commu")
public class CommuController {
    private final CommuService commuService;
    private final CommuMapper mapper;
    private final CommentService commentService;

    private final JwtTokenizer jwtTokenizer;

    private CustomS3Client customS3Client;



    public CommuController(CommuService commuService, CommuMapper mapper, CommentService commentService, JwtTokenizer jwtTokenizer, CustomS3Client customS3Client) {
        this.commuService = commuService;
        this.mapper = mapper;
        this.commentService = commentService;
        this.jwtTokenizer = jwtTokenizer;
        this.customS3Client = customS3Client;
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
        String imageUrl = null;
        if(image!=null){
            imageUrl = customS3Client.uploadImageToS3(image);
        }

        // CommuPostDto에 이미지 URL 설정
        Commu commu = commuService.createCommuCustom(title, content, imageUrl, userId);


        return new ResponseEntity<>(mapper.commuToCommuResponseDto(commu), HttpStatus.CREATED);
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
        User user = commu.getUser();

        CommuResponseDto commuResponseDto = mapper.commuToCommuResponseDto(commu);
        commuResponseDto.setUserProfileImageUrl(user.getProfileImgUrl());
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