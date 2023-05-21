package com.example.mission.service;

import com.example.mission.constant.Role;
import com.example.mission.domain.MemberDTO;
import com.example.mission.entity.Member;
import com.example.mission.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Member join(MemberDTO memberDTO) {
        memberDTO.setMemberRole(Role.MEMBER);
        return memberRepository.save(memberDTO.toEntity());
    }
    public boolean idCheck(String memberIdentification) {
        if(memberRepository.findByMemberIdentification(memberIdentification) == null) {
            return false;
        }
        return true;
    }
    public boolean nicknameCheck(String memberNickname) {
        if(memberRepository.findByMemberNickname(memberNickname) == null) {
            return false;
        }
        return true;
    }
    public Member login(String memberIdentification, String memberPassword) {
        return memberRepository.findByMemberIdentificationAndMemberPassword(memberIdentification, memberPassword);
    }
}
