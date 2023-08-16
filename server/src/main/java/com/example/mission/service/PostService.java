package com.example.mission.service;

import com.example.mission.domain.PostDTO;
import com.example.mission.entity.Post;
import com.example.mission.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public List<Post> getPostList() {
        return postRepository.findAllByOrderByPostIdDesc();
    }
    public Post addPost(PostDTO postDTO) {
        return postRepository.save(postDTO.toEntity());
    }
}
