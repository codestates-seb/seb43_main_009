package com.codestates.sebmainproject009.comment.repository;

import com.codestates.sebmainproject009.comment.entity.Comment;


public interface CommentCustomRepository {
    Comment findByCommentId(String id);

    void deleteByCommentId(String id);

}
