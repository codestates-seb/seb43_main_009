package com.codestates.sebmainproject009.s3.client;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.codestates.sebmainproject009.s3.utils.GenerateName;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;

@Component
public class CustomS3Client {

    @Value("${cloud.aws.credentials.accessKey}")
    String accessKey;
    @Value("${cloud.aws.credentials.secretKey}")
    String secretKey;
    String region = "ap-northeast-2";
    String bucketName = "dowajoyak.image";

    private final GenerateName generateName;

    public CustomS3Client(GenerateName generateName) {
        this.generateName = generateName;
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
            String fileName = null;
            if (image.getOriginalFilename() != null) {
                fileName = generateName.generateFileName(image.getOriginalFilename());
            } else return null;

            // 이미지 파일을 로컬에 저장
            Path tempFile = Files.createTempFile(fileName, "");
            image.transferTo(tempFile.toFile());

            // S3에 이미지 업로드
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucketName, fileName, tempFile.toFile());
            s3Client.putObject(putObjectRequest);

            // 업로드된 이미지의 URL 생성
            String imageUrl = "https://s3." + region + ".amazonaws.com/" + bucketName + "/" + fileName;

            return imageUrl;
        } catch (Exception e) {
            // 업로드 실패 처리
            e.printStackTrace();
            return null;
        } finally {
            // S3 클라이언트 종료
            s3Client.shutdown();
        }
    }
}
