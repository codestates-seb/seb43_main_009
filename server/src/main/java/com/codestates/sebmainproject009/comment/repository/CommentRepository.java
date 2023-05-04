package com.codestates.sebmainproject009.comment.repository;

import com.codestates.sebmainproject009.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
