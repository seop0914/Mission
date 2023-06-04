package com.example.mission.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "post")
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private Long postId;
    String postTitle;
    String postContent;
    String memberNickname;
    Long postViews;
    Long postLikes;

    @JoinColumn(name = "memberId")
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;
}
