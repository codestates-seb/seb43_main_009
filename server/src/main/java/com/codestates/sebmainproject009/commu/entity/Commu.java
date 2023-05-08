package com.codestates.sebmainproject009.commu.entity;

import com.codestates.sebmainproject009.comment.entity.Comment;
import com.codestates.sebmainproject009.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "commu")
public class Commu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commuId;

    @Column
    private String title;

    @Column
    private String content;

    @OneToMany(mappedBy = "commu", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonIgnore
    private List<Comment> comments = new ArrayList<>();

    @Column
    private LocalDateTime createAt = LocalDateTime.now();

    @Column
    @ColumnDefault("0")
    private int view;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public void setUser(User user) {
        this.user = user;
    }


    public void addComment(Comment comment) {
        this.comments.add(comment);
    }
}
