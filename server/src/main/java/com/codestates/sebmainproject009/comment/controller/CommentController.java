package com.codestates.sebmainproject009.comment.controller;

import com.codestates.sebmainproject009.comment.dto.CommentPostDto;
import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.comment.mapper.CommentMapper;
import com.codestates.sebmainproject009.comment.service.CommentService;
import com.codestates.sebmainproject009.commu.service.CommuService;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    private final CommentMapper mapper;
    private final UserService userService;

    @PostMapping("/commu/{commuId}")
    public ResponseEntity postComment(@RequestBody CommentPostDto commentPostDto){

        User user = userService.findVerifiedUser(commentPostDto.getUserId());

        Comment comment = commentService.createComment(commentPostDto);

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(comment), HttpStatus.CREATED);
    }



}
