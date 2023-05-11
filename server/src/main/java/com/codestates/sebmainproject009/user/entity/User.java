package com.codestates.sebmainproject009.user.entity;

import com.codestates.sebmainproject009.commu.entity.Commu;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@RequiredArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long userId;
    @Column(updatable = false, nullable = false, unique = true)
    String email;
    @Column(nullable = false)
    String displayName;
    @Column(nullable = false)
    String password;
    @Column
    LocalDateTime createAt = LocalDateTime.now();
    public User(String email, String displayName){
        this.email = email;
        this.displayName = displayName;
    }

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String > roles = new ArrayList<>();
}
