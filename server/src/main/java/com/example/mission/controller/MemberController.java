package com.example.mission.controller;

import com.example.mission.domain.MemberDTO;
import com.example.mission.entity.Member;
import com.example.mission.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/member/*")
public class MemberController {
    private final MemberService memberService;

    @PutMapping("/join")
    public Member join(@RequestBody MemberDTO memberDTO) {
        return memberService.join(memberDTO);
    }
    @GetMapping("/idCheck")
    public boolean idCheck(@RequestParam String memberIdentification) {
        return memberService.idCheck(memberIdentification);
    }
    @GetMapping("/nicknameCheck")
    public boolean nicknameCheck(@RequestParam String memberNickname) {
        return memberService.nicknameCheck(memberNickname);
    }
    @PostMapping("/login")
    public Member login(@RequestBody MemberDTO memberDTO, HttpSession session) {
        // session.setAttribute("memberId", memberService.login(memberIdentification, memberPassword));
        Member memberLogin = memberService.login(memberDTO.getMemberIdentification(), memberDTO.getMemberPassword());
        return memberLogin;
    }
    @GetMapping("/logout")
    public void logout(HttpSession session) {
        session.invalidate();
    }
}
