package com.codestates.sebmainproject009.commu.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommuPostDto {
    private String title;
    private String content;
    private Long userId;
}
