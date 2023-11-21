package com.codestates.sebmainproject009.commu.dto;

import com.codestates.sebmainproject009.comment.dto.CommentResponseDto;
import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class CommuResponseDto {
    private Long commuId;
    private String title;
    private String content;
    private LocalDateTime createAt = LocalDateTime.now();
    private int view;
    private String displayName;
    private List<Comment> comments;

    private Long userId;

    private String imageUrl;

    private String userProfileImageUrl;

}