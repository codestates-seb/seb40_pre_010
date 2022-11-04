package com.backendPreProject.login.controller;

import com.backendPreProject.login.service.LoginService;
import com.backendPreProject.user.dto.UserLoginDto;
import com.backendPreProject.user.service.UserService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/user")
@Validated
public class LoginController {

    private LoginService loginService;

    private UserService userService;
//    private UserMapper mapper;     //mapper 시도


    public LoginController(LoginService loginService,
                           UserService userService){
//                           UserMapper mapper){
        this.loginService = loginService;
        this.userService = userService;
//        this.mapper = mapper;
    }

    @PostMapping("/login")    // 로그인
    public ResponseEntity postLogin(@Valid @RequestBody UserLoginDto userLoginDto) {

        String token = loginService.login(userLoginDto.getUserId(),userLoginDto.getUserPw());

        return new ResponseEntity<>(token,HttpStatus.OK); // 로그인을 통과하는 경우 200.ok 반환
    }
}





