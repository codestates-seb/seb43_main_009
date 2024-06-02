package com.codestates.sebmainproject009.user.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Document("user")
public class User {
    @Id
    private String objectId;
    private String userId;
    private String email;
    private String displayName;
    private String password;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime createAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();

    private List<String > roles = new ArrayList<>();

    public User(String email, String displayName) {
        this.email = email;
        this.displayName = displayName;
    }


    private WorriedOrgan worriedOrgan = WorriedOrgan.NONE;


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
