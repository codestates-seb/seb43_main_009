package com.codestates.sebmainproject009.commu.dto;

import com.codestates.sebmainproject009.comment.entity.Comment;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommuResponsesDto {
    private Long commuId;
    private String title;
    private LocalDateTime createAt = LocalDateTime.now();
    private int view;
    private String displayName;
}
