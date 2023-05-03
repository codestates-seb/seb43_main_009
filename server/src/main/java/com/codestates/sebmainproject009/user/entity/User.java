package com.codestates.sebmainproject009.user.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long userId;
    @Column
    String email;
    @Column
    String displayName;
    @Column
    String password;
    @Column
    LocalDateTime createAt = LocalDateTime.now();
}
