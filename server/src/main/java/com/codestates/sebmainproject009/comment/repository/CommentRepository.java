package com.codestates.sebmainproject009.comment.repository;

import com.codestates.sebmainproject009.comment.entity.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CommentRepository extends MongoRepository<Comment, String>, CommentCustomRepository{
}
