package com.codestates.sebmainproject009.s3.controller;


import com.codestates.sebmainproject009.s3.client.CustomS3Client;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class S3Controller {

    private final CustomS3Client customS3Client;

    private final UserService userService;

    public S3Controller(CustomS3Client customS3Client, UserService userService) {
        this.customS3Client = customS3Client;
        this.userService = userService;
    }

    @PostMapping(value = "/postsToS3", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity postToS3(@RequestParam("image") MultipartFile image,
                                   @RequestParam("userId") Long userId){
        try {
            String imageUrl = null;
            if(image!=null){
                imageUrl = customS3Client.uploadImageToS3(image);
            } else {
                return new ResponseEntity(HttpStatus.BAD_REQUEST);
            }

            User user = userService.findUser(userId);
            user.setProfileImgUrl(imageUrl);
            userService.updateUser(user);

            return new ResponseEntity(imageUrl, HttpStatus.OK);

        }catch (Exception e) {
            return new ResponseEntity(e.getMessage(),HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
