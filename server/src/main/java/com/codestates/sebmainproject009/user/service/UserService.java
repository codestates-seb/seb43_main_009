package com.codestates.sebmainproject009.user.service;

import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.NoSuchMessageException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){
        User saveUser = userRepository.save(user);

        return saveUser;
    }

    public User updateUser(User user){
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getEmail())
                .ifPresent(email -> findUser.setEmail(email));
        Optional.ofNullable(user.getDisplayName())
                .ifPresent(name -> findUser.setDisplayName(name));

        return userRepository.save(findUser);
    }

    public User findUser(long userId){

        return findVerifiedUser(userId);
    }

    public void deleteUser(long userId){
        userRepository.deleteById(userId);
    }

    public User findVerifiedUser(long userId){
        Optional<User>optionalUser = userRepository.findById(userId);

        return optionalUser.orElseThrow(
                () -> new NoSuchMessageException("회원이 없습니다"));
    }
}
