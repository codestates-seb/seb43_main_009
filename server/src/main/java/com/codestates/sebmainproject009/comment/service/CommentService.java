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
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.stereotype.Service;



@Service
@Getter
@Setter
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper mapper;
    private final UserService userService;
    private final CommuService commuService;
    

    public Comment createComment(CommentPostDto commentPostDto){

        Commu findCommu = commuService.findVerifiedCommu(commentPostDto.getCommuId());

        User findUser = userService.findVerifiedUser(commentPostDto.getUserId());
        Comment comment = mapper.commentPostDtoToComment(commentPostDto);
        comment.setUser(findUser);
        comment.setDisplayName(findUser.getDisplayName());
        comment.setCommu(findCommu);

        findCommu.addComment(comment);

        return commentRepository.save(comment);
    }

    public void deleteComment(long commentId){
        commentRepository.deleteById(commentId);
    }

}
