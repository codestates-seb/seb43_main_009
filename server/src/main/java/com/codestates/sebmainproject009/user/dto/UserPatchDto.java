package com.codestates.sebmainproject009.user.dto;


import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserPatchDto {

    private long userId;

    @NotBlank(message = "이름을 적어주세요.")
    private String displayName;


}
