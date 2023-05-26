package com.codestates.sebmainproject009.auth.userdetails;


import com.codestates.sebmainproject009.auth.utils.CustomAuthorityUtils;
import com.codestates.sebmainproject009.exception.BusinessLogicException;
import com.codestates.sebmainproject009.exception.ExceptionCode;
import com.codestates.sebmainproject009.user.entity.User;
import com.codestates.sebmainproject009.user.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    public UserDetailsService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Optional<User> optionalMember = userRepository.findByEmail(username);
        User findUser = optionalMember.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new UserDetails(findUser);
    }

    private final class UserDetails extends User implements org.springframework.security.core.userdetails.UserDetails{

        public UserDetails(User user) {
            setUserId(user.getUserId());
            setEmail(user.getEmail());
            setPassword(user.getPassword());
            setProfileImgUrl(user.getProfileImgUrl());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
