package com.example.mission.domain;

import com.example.mission.entity.Post;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Data
@NoArgsConstructor
public class PostDTO {
    private Long postId;
    private String postTitle;
    private String postContent;
    private String memberNickname;
    private Long postViews;
    private Long postLikes;

    public Post toEntity() {
        return Post.builder()
                .postId(postId)
                .postTitle(postTitle)
                .postContent(postContent)
                .memberNickname(memberNickname)
                .postViews(postViews)
                .postLikes(postLikes)
                .build();
    }
    public PostDTO(Post post) {
        postId = post.getPostId();
        postTitle = post.getPostTitle();
        postContent = post.getPostContent();
        memberNickname = post.getMemberNickname();
        postViews = post.getPostViews();
        postLikes = post.getPostLikes();
    }
}
