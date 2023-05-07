package com.example.mission.domain;

import com.example.mission.constant.Role;
import com.example.mission.entity.Member;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Component;
import java.time.LocalDate;
@Component
@Data
@NoArgsConstructor
public class MemberDTO {
    private String memberName;
    private String memberIdentification;
    private String memberPassword;
    private String memberEmail;
    private String memberNickname;
    private Role memberRole;
    public Member toEntity() {
        return Member.builder()
                .memberName(memberName)
                .memberIdentification(memberIdentification)
                .memberPassword(memberPassword)
                .memberEmail(memberEmail)
                .memberNickname(memberNickname)
                .memberRole(memberRole)
                .build();
    }
}
