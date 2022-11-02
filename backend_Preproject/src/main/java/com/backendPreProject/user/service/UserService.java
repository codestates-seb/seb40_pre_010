package com.backendPreProject.user.service;

import com.backendPreProject.exception.BusinessLogicException;
import com.backendPreProject.exception.ExceptionCode;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;


import org.springframework.security.crypto.password.PasswordEncoder;

//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    //private BCryptPasswordEncoder bCryptPasswordEncoder;
    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder
    //                   ,BCryptPasswordEncoder bCryptPasswordEncoder
                        ){
        this.userRepository = userRepository;
        this.passwordEncoder=passwordEncoder;
        //this.bCryptPasswordEncoder=bCryptPasswordEncoder;
    }

    public User CreateUser(User user) {      // *** 회원가입 ***
        User userId = userRepository.findByUserId(user.getUserId());   // DB 에 user 가 입력한 userId 와 똑같은 userId가 존재하는지 확인
        if (userId != null) {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS); // 이미 똑같은 userId 가 존재할 경우 , USER_EXISTS 오류
        }

        user.setUserPw(passwordEncoder.encode(user.getUserPw())); // 복호화 진행

        return userRepository.save(user);
    }

    public User FindUser(String userId) {

        User findUser = userRepository.findByUserId(userId);

        if (findUser == null) {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }

        return userRepository.findByUserId(userId);
    }

    public List<User> FindUsers () {   // 전체 회원 조회

        List<User> findUsers = userRepository.findAll();

        return findUsers;
    }

    public void DeleteUser(int userId) {

        User user = findVerifiedUser(userId);
        userRepository.delete(user);
    }

    public User findVerifiedUser(int userId) {

        Optional<User> optionalUser = Optional.ofNullable(userRepository.findById(userId));

        User findUser = optionalUser.orElseThrow(() -> //만일 db에 저장된 유저 정보 없으면 예외발생
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }
}
