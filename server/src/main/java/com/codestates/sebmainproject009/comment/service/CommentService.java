package com.codestates.sebmainproject009.comment.service;

import com.codestates.sebmainproject009.comment.dto.CommentPostDto;
import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.comment.mapper.CommentMapper;
import com.codestates.sebmainproject009.comment.repository.CommentRepository;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.commu.service.CommuService;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.service.UserService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Getter
@Setter
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper mapper;
    private final UserService userService;

    private final CommuService commuService;

    public CommentService(CommentRepository commentRepository, CommentMapper mapper, UserService userService, CommuService commuService) {
        this.commentRepository = commentRepository;
        this.mapper = mapper;
        this.userService = userService;
        this.commuService = commuService;
    }


    public Comment createComment(CommentPostDto commentPostDto){

        Commu findCommu = commuService.findVerifiedCommu(commentPostDto.getCommuId());
        User findUser = userService.findVerifiedUser(commentPostDto.getUserId());
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        comment.setUser(findUser);
        comment.setDisplayName(findUser.getDisplayName());
        comment.setCommuId(findCommu.getCommuId());

        findCommu.addComment(comment);

        return commentRepository.save(comment);
    }

    public void deleteCommentsByCommuId(String commuId){

        Commu foundCommu = commuService.findCommu(commuId);

        List<Comment> comments = foundCommu.getComments();

        for (Comment comment : comments){
            deleteComment(comment.getCommentId());
        }

    }

    public void deleteComment(String commentId){
        commentRepository.deleteByCommentId(commentId);
    }

    public Comment findVerifiedComment(String commentId){
        Comment comment = commentRepository.findByCommentId(commentId);

        return comment;
    }




}
