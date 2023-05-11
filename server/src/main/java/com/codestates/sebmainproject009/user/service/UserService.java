package com.codestates.sebmainproject009.user.service;

import com.codestates.sebmainproject009.auth.utils.CustomAuthorityUtils;
import com.codestates.sebmainproject009.exception.BusinessLogicException;
import com.codestates.sebmainproject009.exception.ExceptionCode;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils){
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }
    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String > roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);

        return savedUser;
    }


    @Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public User updateUser(User user){
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getDisplayName())
                .ifPresent(name -> findUser.setDisplayName(name));

        return userRepository.save(findUser);
    }

    @Transactional(readOnly = true)
    public User findUser(long userId){

        return findVerifiedUser(userId);
    }

    public void deleteUser(long userId){
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }

    @Transactional(readOnly = true)
    public User findVerifiedUser(long userId){
        Optional<User>optionalUser = userRepository.findById(userId);

        return optionalUser.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }

    private void verifyExistsEmail(String email) {
        Optional<User> User = userRepository.findByEmail(email);
        if (User.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public boolean verifyUser(String email){
        Optional<User> User = userRepository.findByEmail(email);
        if (User.isPresent()) return true;

        return false;
    }
}
