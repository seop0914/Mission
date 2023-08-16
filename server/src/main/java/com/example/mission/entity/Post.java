package com.example.mission.entity;

import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Table(name = "post")
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue
    private Long postId;
    @NotNull
    private String postTitle;
    @NotNull
    private String postContent;
    @NotNull
    private String memberNickname;

    @Column(name = "post_views")
    @ColumnDefault("0")
    private Long postViews;

    @Column(name = "post_likes")
    @ColumnDefault("0")
    private Long postLikes;

    @JoinColumn(name = "memberId")
    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

    @Builder
    public Post(Long postId, String postTitle, String postContent, String memberNickname, Long postViews, Long postLikes){
        this.postId = postId;
        this.postTitle = postTitle;
        this.postContent = postContent;
        this.memberNickname = memberNickname;
        this.postViews = postViews;
        this.postLikes = postLikes;
    }
}
