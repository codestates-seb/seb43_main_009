package com.codestates.sebmainproject009.comment.entity;

import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.user.entity.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Document("comment")
@Getter
@Setter
public class Comment {

    @Id
    private String objectId;

    private String commentId;

    private String comment;

    private String displayName;

    private LocalDateTime createAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();


    private String commuId;

    private User user;


}
