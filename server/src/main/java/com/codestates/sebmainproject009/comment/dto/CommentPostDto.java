package com.codestates.sebmainproject009.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class CommentPostDto {
    private Long userId;
    private Long commuId;
    @NotBlank
    private String comment;
}
