package com.example.mission.exception;


import com.example.mission.constant.ErrorCode;

public class LoginFailedException extends RuntimeException {
    public LoginFailedException(){
        super(ErrorCode.LOGIN_FAILED.getMessage());
    }
    private LoginFailedException(String message){
        super(message);
    }
}
