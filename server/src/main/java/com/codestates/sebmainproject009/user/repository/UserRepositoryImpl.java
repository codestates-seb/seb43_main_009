package com.codestates.sebmainproject009.user.repository;

import com.codestates.sebmainproject009.user.entity.User;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.Optional;


public class UserRepositoryImpl implements UserCustomRepository{


    private final MongoTemplate mongoTemplate;

    public UserRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public User findByUserId(String id) {
        Query query = new Query(Criteria.where("userId").is(id));

        return mongoTemplate.findOne(query, User.class);
    }

    @Override
    public void deleteByUserId(Long id) {
        Query query = new Query(Criteria.where("userId").is(id));
        mongoTemplate.remove(query, User.class);
    }

}
