package com.example.mission.constant;

import lombok.Getter;

@Getter
public enum Role {
    ADMIN, MEMBER;
    private static final String ROLE_PREFIX = "ROLE_";
    public String getSecurityRole() {
        return ROLE_PREFIX + name();
    }
}

