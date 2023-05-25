package com.codestates.sebmainproject009.config;

import com.codestates.sebmainproject009.auth.filter.JwtAuthenticationFilter;
import com.codestates.sebmainproject009.auth.filter.JwtVerificationFilter;
import com.codestates.sebmainproject009.auth.handler.*;
import com.codestates.sebmainproject009.auth.jwt.JwtTokenizer;
import com.codestates.sebmainproject009.auth.utils.CustomAuthorityUtils;
import com.codestates.sebmainproject009.user.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity(debug=false)
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final UserService userService;

    @Lazy
    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils, UserService userService) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
        this.userService = userService;
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
                .apply(new JWTFilterConfigurer())
                // 인증 API 끝, 인가 API 시작
                .and()
                .authorizeHttpRequests(authorize->authorize
                        .antMatchers(HttpMethod.GET).permitAll()
                        .antMatchers(HttpMethod.POST, "/*/users/signup").permitAll()// 회원가입은 누구나
                //        .antMatchers(HttpMethod.PATCH, "/*/users/**").hasRole("USER") // 회원 정보 수정은 USER 만
                //        .antMatchers(HttpMethod.GET, "/*/users/**").hasAnyRole("USER","ADMIN") // 특정 회원은 ADMIN, USER 아무나
                //        .antMatchers(HttpMethod.DELETE, "/*/users/**").hasRole("USER") // 회원 삭제는 USER 만

                //        .antMatchers(HttpMethod.POST, "/*/commu/posts").hasAnyRole("USER","ADMIN")
                //        .antMatchers(HttpMethod.PATCH, "/*/commu/**").hasAnyRole("USER","ADMIN")
                //        .antMatchers(HttpMethod.POST, "/*/commu/**").hasAnyRole("USER","ADMIN")
                //        .antMatchers(HttpMethod.DELETE, "/*/commu/**").hasRole("USER")

                       // .anyRequest().authenticated() //검증 부분 잠깐 뺐음

                       .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2UserSuccessHandler(jwtTokenizer, authorityUtils, userService)));
                // OAuth 2 로그인 인증을 활성화
      
        // 현재 Spring boot 버젼에서 authorizeHttpRequests 가 안됨. authorizeRequest 는 바뀐 방식이다.
        return http.build();
    }




    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();

        configuration.addAllowedOriginPattern("http://localhost:3000");
        configuration.addAllowedOriginPattern("http://localhost:3001");
        configuration.addAllowedOriginPattern("https://www.dowajoyak.store");
        configuration.addAllowedOriginPattern("https://dowajoyak.store");
        configuration.addAllowedOriginPattern("https://server.dowajoyak.store");
        configuration.addAllowedHeader("*");
        configuration.setAllowedMethods(Arrays.asList("*"));
        configuration.addExposedHeader("Authorization");
        configuration.addExposedHeader("Refresh");
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

    public class JWTFilterConfigurer extends AbstractHttpConfigurer<JWTFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {

            System.out.println("In JWT FILTER config");

            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/users/login");
            //인증 성공 실패 로그 구성
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            // JWT 검증 구성
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
                    .addFilterBefore(jwtAuthenticationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }
    public class OAUTHFilterConfigurer extends AbstractHttpConfigurer<JWTFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {

            System.out.println("In OAUTH FILTER config");
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);


            builder
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
