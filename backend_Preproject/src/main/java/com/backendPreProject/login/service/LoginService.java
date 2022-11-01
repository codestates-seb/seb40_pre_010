package com.backendPreProject.login.service;

import com.backendPreProject.exception.BusinessLogicException;
import com.backendPreProject.exception.ExceptionCode;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private UserRepository userRepository;

    public void login (String userId , String userPw){

        User user = userRepository.findByUserId(userId);

        if (user == null) throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);  // 로그인시 user 가 입력한 userId 가 DB 에 일치하는게 없을 시

        else if (!user.getUserPw().equals(userPw)) throw new BusinessLogicException(ExceptionCode.PASSWORD_MISMATCH); // 로그인 시 user 입력한 userId 와 password 가 일치하지 않을 때 (비밀번호가 틀렸다)

//        return user;    // 리턴이 이게 맞는지 ?   로그인이 리턴값이 필요할까 싶어서 delete 처럼 void 로도 시도해봤다 아마 아닌듯
    }

}
