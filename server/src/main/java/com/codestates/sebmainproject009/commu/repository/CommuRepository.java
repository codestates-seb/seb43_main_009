package com.codestates.sebmainproject009.commu.repository;

import com.codestates.sebmainproject009.commu.entity.Commu;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface CommuRepository  extends MongoRepository<Commu, String>, CommuCustomRepository {
}
