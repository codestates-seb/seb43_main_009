package com.codestates.sebmainproject009.survey.controller;

import com.codestates.sebmainproject009.survey.Dto.SurveyDto;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.repository.UserRepository;
import com.codestates.sebmainproject009.user.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

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

        String inputAllergy = surveyDto.getAllergy();

        if(Arrays.stream(User.Allergy.values()).anyMatch(i->i.toString().equals(inputAllergy))){
            user.setAllergy(User.Allergy.valueOf(surveyDto.getAllergy()));
            user.setOtherAllergy(null);
        }else {
            user.setAllergy(User.Allergy.OTHER);
            user.setOtherAllergy(inputAllergy);
        }

        userRepository.save(user);
    }
}
