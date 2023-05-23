package com.codestates.sebmainproject009.user.controller;


import com.codestates.sebmainproject009.comment.service.CommentService;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.service.CommuService;
import com.codestates.sebmainproject009.user.dto.UserPatchDto;
import com.codestates.sebmainproject009.user.dto.UserPostDto;
import com.codestates.sebmainproject009.user.dto.UserResponseDto;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.mapper.UserMapper;
import com.codestates.sebmainproject009.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    private final UserMapper mapper;

    private final CommuService commuService;

    private final CommentService commentService;

    public UserController(UserService userService, UserMapper mapper, CommuService commuService, CommentService commentService) {
        this.userService = userService;
        this.mapper = mapper;
        this.commuService = commuService;
        this.commentService = commentService;
    }

    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){

        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));


        return new ResponseEntity<>(mapper.userToUserResponseDto(user), HttpStatus.CREATED);
    }

    @PatchMapping("/{userId}")
    public ResponseEntity patchUser(@PathVariable @Positive long userId,
                                    @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);

        User user = userService.updateUser(mapper.userPatchDtoToUser(userPatchDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(user),HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity getUser(@PathVariable @Positive long userId){
        User user = userService.findUser(userId);

        UserResponseDto userResponseDto = mapper.userToUserResponseDto(user);
        userResponseDto.setProfileImgUrl(user.getProfileImgUrl());
        // User 가 알러지 값을 임의로 입력했으면 따로 불러와서 설정해 주어야 함.
        if(user.getAllergy().toString().equals("OTHER"))
            userResponseDto.setAllergy(user.getOtherAllergy());


        return new ResponseEntity<>(userResponseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity deleteUser(@PathVariable @Positive long userId){

        List<Commu> foundCommu = commuService.findCommuList();

        for(Commu data: foundCommu){
            long found = data.getUser().getUserId();

            if(found==userId){
                commuService.deleteCommu(data.getCommuId());

                // comment 는 글 삭제 메서드에 포함되어 있음
            }
        }



        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
