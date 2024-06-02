package com.codestates.sebmainproject009.commu.repository;

import com.codestates.sebmainproject009.commu.entity.Commu;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.Optional;

public class CommuRepositoryImpl implements CommuCustomRepository{

    private final MongoTemplate mongoTemplate;

    public CommuRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public Commu findByCommuId(String id) {
        Query query = new Query(Criteria.where("commuId").is(id));

        return mongoTemplate.findOne(query, Commu.class);
    }
    @Override
    public void deleteByCommuId(String id) {
        Query query = new Query(Criteria.where("commuId").is(id));

        mongoTemplate.remove(query, Commu.class);
    }
}
