package com.codestates.sebmainproject009.commu.repository;

import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommuRepository  extends JpaRepository<Commu, Long> {
}
