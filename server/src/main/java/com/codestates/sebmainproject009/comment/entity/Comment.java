package com.codestates.sebmainproject009.comment.entity;

import com.codestates.sebmainproject009.commu.entity.Commu;
import com.codestates.sebmainproject009.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@Entity
@Getter
@Setter
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column
    private String comment;

    @Column
    private String displayName;

    @Column
    private LocalDateTime createAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();

    @ManyToOne
    @JoinColumn(name = "commuId")
    @JsonIgnore
    private Commu commu;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "userId")
    private User user;


}
