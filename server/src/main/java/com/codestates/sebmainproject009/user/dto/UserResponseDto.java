package com.codestates.sebmainproject009.user.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponseDto {
    private long userId;
    private String email;
    private String displayName;
    private String allergy;
    private String profileImgUrl;
}
