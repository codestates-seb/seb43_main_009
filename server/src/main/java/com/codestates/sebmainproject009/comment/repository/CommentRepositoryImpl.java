package com.codestates.sebmainproject009.comment.repository;

import com.codestates.sebmainproject009.comment.entity.Comment;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;
import java.util.Optional;

public class CommentRepositoryImpl implements CommentCustomRepository{

    private final MongoTemplate mongoTemplate;

    public CommentRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public Comment findByCommentId(String id) {

        Query query = new Query(Criteria.where("commentId").is(id));

        return mongoTemplate.findOne(query, Comment.class);

    }

    @Override
    public void deleteByCommentId(String id) {
        Query query = new Query(Criteria.where("commentId").is(id));
        mongoTemplate.remove(query, Comment.class);
    }


}
