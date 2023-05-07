package com.example.mission.interceptor;

import com.example.mission.constant.Role;
import com.example.mission.exception.CustomAuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@Component
public class AuthInterceptor implements HandlerInterceptor {
    // 컨트롤러에 진입하기 전에 실행되고 반환 값이 true일 경우 컨트롤러로 진입, false일 경우 진입하지 않는다.
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
// 인가(권한 부여): 사용자에게 특정 리소스나 기능에 액세스할 수 있는 권한을 부여하는 프로세스
        String role = (String)request.getSession().getAttribute("role");
        if(role != null && role.equals(Role.MEMBER.name())) {
            return true;
        }
// return false;
        throw new CustomAuthenticationException();
    }
}


