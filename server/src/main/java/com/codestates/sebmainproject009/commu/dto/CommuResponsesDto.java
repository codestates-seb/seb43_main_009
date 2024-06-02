package com.codestates.sebmainproject009.commu.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommuResponsesDto {
    private String commuId;
    private String title;
    private LocalDateTime createAt = LocalDateTime.now();
    private int view;
    private String displayName;
}
