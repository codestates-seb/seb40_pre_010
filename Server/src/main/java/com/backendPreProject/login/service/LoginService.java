package com.backendPreProject.login.service;

import com.backendPreProject.exception.BusinessLogicException;
import com.backendPreProject.exception.ExceptionCode;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.backendPreProject.Config.jwt.JwtTokenProvider;

@Service
public class LoginService {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private JwtTokenProvider jwtTokenProvider;
    public LoginService(UserRepository userRepository,
                        PasswordEncoder passwordEncoder,
                        JwtTokenProvider jwtTokenProvider){
        this.userRepository=userRepository;
        this.passwordEncoder=passwordEncoder;
        this.jwtTokenProvider=jwtTokenProvider;
    }

    public String login (String userId , String userPw){

        User user = userRepository.findByUserId(userId);

        if (user == null) throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);  // 로그인시 user 가 입력한 userId 가 DB 에 일치하는게 없을 시

        if (!passwordEncoder.matches(userPw,user.getUserPw())) throw new BusinessLogicException(ExceptionCode.PASSWORD_MISMATCH); // 로그인 시 user 입력한 userId 와 password 가 일치하지 않을 때 (비밀번호가 틀렸다)

        return jwtTokenProvider.createToken(userId);
    }

}
