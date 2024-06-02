package com.codestates.sebmainproject009.commu.entity;

import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.user.entity.User;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;

@Document("commu")
@Getter
@Setter
public class Commu {
    @Id
    private String objectId;

    private String commuId;

    private String title;

    private String content;

    private List<Comment> comments = new ArrayList<>();

    private LocalDateTime createAt = ZonedDateTime.now(ZoneId.of("Asia/Seoul")).toLocalDateTime();


    private int view;

    private User user;

    private String imageUrl;

    public void setUser(User user) {
        this.user = user;
    }


    public void addComment(Comment comment) {
        this.comments.add(comment);
    }
}
