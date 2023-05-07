package com.example.mission.constant;

import lombok.Getter;
@Getter
public enum ErrorCode {
    // 각 상수에 필드 추가(code, message, status)
    LOGIN_FAILED("AUTH_001", " LOGIN_FAILED.", 401),
    AUTHENTICATION_FAILED("AUTH_002", " AUTHENTICATION_FAILED.", 401);
    private final String code;
    private final String message;
    private int status;
    // 필드 초기화(LOGIN_FAILED, AUTHENTICATION_FAILED)
    ErrorCode(final String code, final String message, final int status) {
        this.code = code;
        this.message = message;
        this.status = status;
    }
}
