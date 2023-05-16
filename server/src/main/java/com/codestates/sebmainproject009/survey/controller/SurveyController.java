package com.codestates.sebmainproject009.survey.controller;

import com.codestates.sebmainproject009.survey.Dto.SurveyDto;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.repository.UserRepository;
import com.codestates.sebmainproject009.user.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Column;

@RestController
@RequestMapping("/surveys")
public class SurveyController {

    private final UserRepository userRepository;
    private final UserService userService;

    public SurveyController(UserRepository userRepository, UserService userService){
        this.userRepository = userRepository;
        this.userService = userService;
    }
    @PostMapping
    public void postSurvey(@RequestBody SurveyDto surveyDto){
        User user = userService.findVerifiedUser(surveyDto.getUserId());
        user.setWorriedOrgan(User.WorriedOrgan.valueOf(surveyDto.getDisease()));
        user.setAllergy(User.Allergy.valueOf(surveyDto.getAllergy()));
        userRepository.save(user);
    }
}
