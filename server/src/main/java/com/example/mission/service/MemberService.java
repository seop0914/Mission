package com.example.mission.service;

import com.example.mission.constant.Role;
import com.example.mission.domain.MemberDTO;
import com.example.mission.entity.Member;
import com.example.mission.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    public void join(MemberDTO memberDTO) {
        memberDTO.setMemberRole(Role.MEMBER);
        memberRepository.save(memberDTO.toEntity());
    }
    public Member login(String memberIdentification, String memberPassword) {
        return memberRepository.findByMemberIdentificationAndMemberPassword(memberIdentification, memberPassword);
    }
}
