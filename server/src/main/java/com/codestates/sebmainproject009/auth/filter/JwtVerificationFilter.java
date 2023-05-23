package com.codestates.sebmainproject009.auth.filter;

import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtVerificationFilter extends OncePerRequestFilter {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        try {
            Map<String, Object> claims = verifyJws(request);
            setAuthenticationToContext(claims);
        } catch (SignatureException se){
            request.setAttribute("exception", se); // JWT 서명 검증 실패
        } catch (ExpiredJwtException ee){
            request.setAttribute("exception", ee); // JWT 만료시 발생
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }


        filterChain.doFilter(request, response);
    }


    /*
    여기서 기억해야 할 부분은 JWT 에서 Claims 를 파싱 할 수 있다는 의미는 내부적으로 서명(Signature) 검증에 성공했다는 의미.
⭐ 즉, verify() 같은 검증 메서드가 따로 존재하는 것이 아니라 Claim s가 정상적으로 파싱이 되면 서명 검증 역시 자연스럽게 성공했다는 사실을 꼭 기억.
     */
    private Map<String, Object> verifyJws(HttpServletRequest request) {
        String jws =request.getHeader("Authorization").replace("Bearer ","");


        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());


        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }



    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username");

        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));

        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);

        SecurityContextHolder.getContext().setAuthentication(authentication);
    }


    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException{
        String authorization = request.getHeader("Authorization");

        return authorization == null || !authorization.startsWith("Bearer ");
    }
    /*
    * 위 말의 의미는 JWT가 Authorization header에 포함되지 않았다면 JWT 자격증명이 필요하지 않은 리소스에 대한 요청이라고 판단하고 다음(Next) Filter로 처리를 넘기는 것.
    * 만일 JWT 자격 증명이 필요한 리소스 요청인데 실수로 JWT를 포함하지 않았다 하더라도 이 경우에는 Authentication이 정상적으로
    *  SecurityContext에 저장되지 않은 상태이기 때문에 다른  Security Filter를 거쳐 결국 Exception을 던지게 될 것이다.
    */

}
