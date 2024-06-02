package com.codestates.sebmainproject009.user.repository;

import com.codestates.sebmainproject009.user.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User,String>, UserCustomRepository {

    Optional<User> findByEmail(String email);

}
