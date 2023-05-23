package com.codestates.sebmainproject009.auth.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component
public class JwtTokenizer {

    @Getter
    @Value("${jwt.key}")
    private String secretKey;       // (2)

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes;        // (3)

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes;          // (4)

    /*
      (2), (3), (4)는 JWT 생성 시 필요한 정보이며, 해당 정보는 AWS paramstore 에서 로드합니다.

      (2)는 JWT 생성 및 검증 시 사용되는 Secret Key 정보입니다.

      (3)은 Access Token에 대한 만료 시간 정보입니다

      (4)는 Refresh Token에 대한 만료 시간 정보입니다.
     */

    public String encodeBase64SecretKey(String secretKey){
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    public String generateAccessToken(Map<String , Object> claims,
                                         String subject,
                                         Date expiration,
                                         String baseEncodedSecretKey){

        Key key = getKeyFromBase64EncodedKey(baseEncodedSecretKey);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    public String generateRefreshToken(String subject,
                                         Date expiration,
                                         String baseEncodedSecretKey){

        Key key = getKeyFromBase64EncodedKey(baseEncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        Key key = Keys.hmacShaKeyFor(keyBytes);

        return key;
    }

    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey){
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);
        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(jws);
            return claims;
        }catch (ExpiredJwtException e){
            return null;
        }


    }

    public void verifySignature(String jws, String base64EncodedSecretKey){
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
    }


    /*
    * getTokenExpiration() 메서드는 JWT 의 만료 일시를 지정하기 위한 메서드로 JWT 생성 시 사용됩니다.
    * */
    public Date getTokenExpiration(int expirationMinutes){
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }

    public String extractTokenFromHeader(String authorizationHeader){
        authorizationHeader =
                authorizationHeader.replaceAll("Bearer ", "");
        // "Bearer " 제외한 토큰 값만 추출
        if(verifyTokenExpiration(authorizationHeader)){
            return authorizationHeader;
        }
        return null;
    }

    public Long extractUserIdFromToken(String requestToken){
        if(requestToken!=null) {
            Jws<Claims> claims =
                    getClaims(requestToken, encodeBase64SecretKey(secretKey));
            String userIdString = claims.getBody().get("userId").toString();

            if(userIdString!=null){
                try{
                    return Long.parseLong(userIdString);
                } catch (NumberFormatException e){
                    throw new IllegalArgumentException(e.getMessage());
                }
            }
        }
        return null;
    }


    public boolean verifyTokenExpiration(String requestToken) {
        if (requestToken != null) {
            Jws<Claims> claims = getClaims(requestToken, encodeBase64SecretKey(secretKey));
            Date expiration = null;
            if(claims!=null)
                expiration = claims.getBody().getExpiration();
            
            if (expiration != null) {
                Date now = new Date();
                return now.before(expiration);
                // 현재 시간이 토큰의 만료 시간 이전인지 확인
            }
        }
        return false;
    }

    public String getToken(String authorizationHeader) {

        String token;

        if(authorizationHeader !=null) {
            token = extractTokenFromHeader(authorizationHeader);
        }
        else
            token = null;

        return token;
    }

    public Long getUserId(String token) {

        Long userId;

        if (token != null) {
            userId = extractUserIdFromToken(token);
        }
        else userId = null;

        return userId;
    }

    public Jws<Claims> getClaimsByToken(String extractToken) {

        String base64EncodedSecretKey = encodeBase64SecretKey(secretKey);
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        try {
            Jws<Claims> claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(extractToken);
            return claims;
        }catch (ExpiredJwtException e){
            return null;
        }

    }
}
