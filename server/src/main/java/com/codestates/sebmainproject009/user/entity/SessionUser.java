package com.codestates.sebmainproject009.user.entity;

import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {

    SessionUser(){}

    public SessionUser(User user){
        this.displayName = user.displayName;
        this.email = user.getEmail();
    }

    private String displayName;
    private String email;

}
