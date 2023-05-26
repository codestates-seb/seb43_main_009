package com.codestates.sebmainproject009.user.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
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
    private LocalDateTime createAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String > roles = new ArrayList<>();

    public User(String email, String displayName) {
        this.email = email;
        this.displayName = displayName;
    }

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = true)
    private WorriedOrgan worriedOrgan = WorriedOrgan.NONE;

    @Enumerated(value = EnumType.STRING)
    @Column(length = 20, nullable = true)
    private Allergy allergy = Allergy.NONE;

    private String otherAllergy;

    private String profileImgUrl;

    public User() {
    }

    public enum WorriedOrgan{
        INTESTINE("소화"),
        SKIN("피부"),
        EYE("눈"),
        IMMUNE("면역"),
        FATIGUE("피로"),
        NONE("없음");

        @Getter
        private String target;

        WorriedOrgan(String target){
            this.target = target;
        }
    }

    public enum Allergy{
        CAFFEINE("카페인"),
        ASSPIRIN("아스피린"),
        PENICILLIN("페니실린"),
        ANTICONVULSANT("항경련제"),
        CONTRAST("조영제"),
        ALCOHOL("알코올"),
        ANTIBIOTIC("항생"),
        PAINKILLER("진통"),
        OTHER("기타"),
        NONE("없음");

        @Getter
        private String allergy;

        Allergy(String allergy){this.allergy = allergy;}
    }
}
