package com.codestates.sebmainproject009.user.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPatchDto {
    long userId;
    String email;
    String displayName;


}
