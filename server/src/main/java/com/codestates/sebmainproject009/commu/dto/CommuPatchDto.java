package com.codestates.sebmainproject009.commu.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommuPatchDto {
    private Long commuId;
    private String title;
    private String content;
    private Long userId;
}
