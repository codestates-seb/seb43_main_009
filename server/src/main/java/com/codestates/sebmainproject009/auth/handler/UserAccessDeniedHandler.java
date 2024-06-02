package com.codestates.sebmainproject009.auth.handler;

import com.codestates.sebmainproject009.auth.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Slf4j
public class UserAccessDeniedHandler implements AccessDeniedHandler {

    /*
    * AccessDeniedHandler 는 인증에는 성공했지만 해당 리소스에 대한 권한이 없으면 호출되는 핸들러입니다.
    * */
    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {

        ErrorResponder.sendErrorResponse(response, HttpStatus.FORBIDDEN);
        log.warn("Forbidden error happened: {}", accessDeniedException.getMessage());

    }
}
