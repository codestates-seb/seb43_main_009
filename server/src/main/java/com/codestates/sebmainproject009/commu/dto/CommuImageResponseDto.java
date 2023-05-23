package com.codestates.sebmainproject009.commu.dto;

import com.codestates.sebmainproject009.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class CommuImageResponseDto {

    private Long commuId;
    private String title;
    private String content;
    private LocalDateTime createAt = LocalDateTime.now();
    private int view;
    private String displayName;
    private List<Comment> comments;

    private String imageUrl;

}
