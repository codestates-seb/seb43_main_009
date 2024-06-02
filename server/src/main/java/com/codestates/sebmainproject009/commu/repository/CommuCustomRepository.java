package com.codestates.sebmainproject009.commu.repository;

import com.codestates.sebmainproject009.commu.entity.Commu;


public interface CommuCustomRepository {

    Commu findByCommuId(String id);

    void deleteByCommuId(String id);
}
