package com.codestates.sebmainproject009.comment.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentResponseDto {
    private Long commentId;
    private String comment;
    private String displayName;
    private LocalDateTime createAt = LocalDateTime.now();
}
