package com.codestates.sebmainproject009.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentPostDto {
    private Long userId;
    private Long commuId;
    private String comment;
}
