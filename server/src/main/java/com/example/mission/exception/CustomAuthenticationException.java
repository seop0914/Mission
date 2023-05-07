package com.example.mission.exception;

import com.example.mission.constant.ErrorCode;

public class CustomAuthenticationException extends RuntimeException {
    public CustomAuthenticationException(){
        super(ErrorCode.AUTHENTICATION_FAILED.getMessage());
    }
    public CustomAuthenticationException(String message){
        super(message);
    }
}

