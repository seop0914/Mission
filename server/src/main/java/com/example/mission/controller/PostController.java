package com.example.mission.controller;

import com.example.mission.domain.PostDTO;
import com.example.mission.entity.Post;
import com.example.mission.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;

    @GetMapping("/community")
    public List<Post> getPostList() {
        return postService.getPostList();
    }
    @PutMapping("/community/add")
    public Post addPost(@RequestBody PostDTO postDTO) {
        return postService.addPost(postDTO);
    }
}
