package com.example.mission.service;

import com.example.mission.domain.PostDTO;
import com.example.mission.entity.Post;
import com.example.mission.repository.MemberRepository;
import com.example.mission.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    private final MemberRepository memberRepository;

    public List<PostDTO> getPostList() {
        List<Post> posts = postRepository.findAllByOrderByPostIdDesc();
        List<PostDTO> postList = new ArrayList<PostDTO>();
        for(int i = 0; i < posts.size(); i++) {
            PostDTO postDTO = new PostDTO(posts.get(i));
            postList.add(postDTO);
        }
        return postList;
    }
    public Post addPost(PostDTO postDTO) {
        Post post = postDTO.toEntity();
        post.changeMember(memberRepository.findById(postDTO.getMemberId()).get());
        return postRepository.save(post);
    }
}
