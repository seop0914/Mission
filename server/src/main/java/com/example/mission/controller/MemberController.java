package com.example.mission.controller;

import com.example.mission.entity.Member;
import com.example.mission.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberRepository memberRepository;

    @GetMapping("/user")
    public List<Member> test() {

        return memberRepository.findAll();
    }
    @GetMapping("/save")
    public void save() {
        Member member = new Member("aaa", "aaa", 21);
        Member member1 = new Member("bbb", "bbb", 23);
        memberRepository.save(member);
        memberRepository.save(member1);
    }
}
