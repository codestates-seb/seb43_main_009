package com.codestates.sebmainproject009.config;

import com.codestates.sebmainproject009.auth.filter.JwtAuthenticationFilter;
import com.codestates.sebmainproject009.auth.filter.JwtVerificationFilter;
import com.codestates.sebmainproject009.auth.handler.UserAccessDeniedHandler;
import com.codestates.sebmainproject009.auth.handler.UserAuthenticationEntryPoint;
import com.codestates.sebmainproject009.auth.handler.UserAuthenticationFailureHandler;
import com.codestates.sebmainproject009.auth.handler.UserAuthenticationSuccessHandler;
import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug=true)
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint()) // 검증에서 exception 발생시
                .accessDeniedHandler(new UserAccessDeniedHandler()) // 검증은 됐지만 허용되지 않은 리소스에 접근시
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeRequests(authorize->authorize
                        .antMatchers(HttpMethod.POST, "/*/users/signup").permitAll() // 회원가입은 누구나
                        .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER") // 회원 정보 수정은 USER 만
                        .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER","ADMIN") // 특정 회원은 ADMIN, USER 아무나
                        .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER") // 회원 삭제는 USER 만
                        .anyRequest().permitAll());
        // 현재 Spring boot 버젼에서 authorizeHttpRequests 가 안됨. authorizeRequest 는 이전 방식이다.
        return http.build();
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOrigin("http://localhost:3000");
        configuration.addAllowedOrigin("https://dowajoyak.shop");
        configuration.addAllowedOrigin("https://www.dowajoyak.shop");
        configuration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE", "PATCH"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {

            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");

            //인증 성공 실패 로그 구성
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            // JWT 검증 구성
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}
