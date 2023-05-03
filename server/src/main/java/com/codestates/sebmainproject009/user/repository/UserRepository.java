package com.codestates.sebmainproject009.user.repository;

import com.codestates.sebmainproject009.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
