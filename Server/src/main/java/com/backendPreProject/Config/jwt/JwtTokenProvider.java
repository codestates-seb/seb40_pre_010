package com.backendPreProject.Config.jwt;

import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.Claims;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
    private String secretKey = "asdfasdfasdfasdfasdf";

    private long tokenValidTime = 60 * 60 * 1000L ;  // 토큰 유효시간 60분
    private UserDetailsService userDetailsService;
    @PostConstruct
    protected void init(){
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
        // 객체 초기화, secretKey 를 Base64 로 인코딩한다.
    }

    //JWT 생성
    public String createToken (String userId){
        Claims claims = Jwts.claims().setSubject(userId); // JWT payload에 저장되는 정보단위
        Date now = new Date();

        return Jwts.builder()
                .setClaims(claims) // 정보저장
                .setIssuedAt(now)  // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime()+tokenValidTime)) // 토큰 발행한 시간 + 유효한 시간
                .signWith(SignatureAlgorithm.HS256,secretKey) //사용할 암호화 알고리즘과 signature 에 들어갈 secret 값 세팅
                .compact();
    }

    // JWT 토큰에서 인증정보 조회
    public Authentication getAuthentication (String token) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserId(token));
        return new UsernamePasswordAuthenticationToken(userDetails,"",userDetails.getAuthorities());
    }

    // 토큰에서 회원정보 추출
    public String getUserId(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // Request 의 Header 에서 token 값을 가져온다.  "X-AUTH-TOKEN" : "TOKEN 값"
    public String resolveToken (HttpServletRequest request){
        return request.getHeader("X-AUTH-TOKEN");
    }

    // 토큰의 유효성 + 만료일자 확인
    public boolean validateToken (String jwtToken){
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
}
