package com.example.mission.repository;

import com.example.mission.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@Transactional
@Rollback(false)
@Slf4j
class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;

    @Test
    public void userTest() {
        Member member = new Member("aaa", "aaa", 21);
        Member savedUser = memberRepository.save(member);
        Member findUser = memberRepository.findById(savedUser.getId()).get();
    }
}