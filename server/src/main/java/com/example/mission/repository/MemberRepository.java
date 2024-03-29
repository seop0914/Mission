package com.example.mission.repository;

import com.example.mission.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

public interface MemberRepository extends JpaRepository<Member, Long> {
    public Member findByMemberIdentificationAndMemberPassword(String memberIdentification, String memberPassword);
    public Member findByMemberIdentification(String memberIdentification);
    public Member findByMemberNickname(String memberNickname);
}
