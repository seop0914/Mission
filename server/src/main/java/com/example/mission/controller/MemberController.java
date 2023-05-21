package com.example.mission.controller;

import com.example.mission.domain.MemberDTO;
import com.example.mission.entity.Member;
import com.example.mission.exception.LoginFailedException;
import com.example.mission.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

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
    public RedirectView login(MemberDTO memberDTO, HttpSession session) {
        // session.setAttribute("memberId", memberService.login(memberIdentification, memberPassword));
        Member memberLogin = memberService.login(memberDTO.getMemberIdentification(), memberDTO.getMemberPassword());
        Optional.ofNullable(memberService.login(memberDTO.getMemberIdentification(),
                memberDTO.getMemberPassword()))
                .ifPresentOrElse(member -> {
                    session.setAttribute("role", member.getMemberRole().name());
                    session.setAttribute("identification", member.getMemberIdentification());
                    session.setAttribute("id", member.getMemberId());
                    session.setMaxInactiveInterval(1800); //세션 유효 시간: 초 단위, 0또는 -1일 경우 세션 무한 유지
                }, () -> {throw new LoginFailedException();});
        return new RedirectView("http://localhost:3000");
    }
    @GetMapping("/logout")
    public RedirectView logout(HttpSession session) {
        session.invalidate();
        return new RedirectView("http://localhost:3000");
    }
}
