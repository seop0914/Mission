package com.example.mission.entity;

import lombok.*;

import com.example.mission.audit.Period;
import com.example.mission.constant.Role;
import com.sun.istack.NotNull;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.apachecommons.CommonsLog;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Data
@Table(name = "member")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends Date {
    @Id
    @GeneratedValue
    private Long memberId;
    @NotNull
    private String memberName;
    @NotNull
    @Column(unique = true)
    private String memberIdentification;
    @NotNull
    private String memberPassword;
    @NotNull
    private String memberEmail;
    @NotNull
    @Column(unique = true)
    private String memberNickname;
    @NotNull
    @Enumerated(EnumType.STRING)
    private Role memberRole;

    @Builder
    public Member(String memberName, String memberIdentification, String memberPassword, String memberEmail, String memberNickname, Role memberRole) {
        this.memberName = memberName;
        this.memberIdentification = memberIdentification;
        this.memberPassword = memberPassword;
        this.memberEmail = memberEmail;
        this.memberNickname = memberNickname;
        this.memberRole = memberRole;
    }
}

