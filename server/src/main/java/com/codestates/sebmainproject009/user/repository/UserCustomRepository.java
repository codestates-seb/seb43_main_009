package com.codestates.sebmainproject009.user.repository;

import com.codestates.sebmainproject009.user.entity.User;


public interface UserCustomRepository {

    User findByUserId(String id);

    void deleteByUserId(Long id);
}
