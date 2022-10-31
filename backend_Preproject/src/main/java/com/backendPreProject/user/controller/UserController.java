package com.backendPreProject.user.controller;

import com.backendPreProject.user.dto.UserPostDto;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.mapper.UserMapper;
import com.backendPreProject.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/user")
@Validated
public class UserController {

    private UserService userService;
    private UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper){
        this.userService = userService;
        this.userMapper=userMapper;
    }

    @PostMapping    // 회원가입
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){

        User user = userService.CreateUser(userMapper.UserPostDto(userPostDto));

        return new ResponseEntity<>(userMapper.UserToUserResponseDto(user), HttpStatus.CREATED);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // api명세서에 없는 기능 -> user 정보가 잘 저장되었나 확인 용도
    @GetMapping("/{userName}") // 확인 용도
    public ResponseEntity findUser(
            @PathVariable("userName") String userName){

        User user= userService.FindUser(userName);

        return new ResponseEntity<>(userMapper.UserToUserResponseDto(user), HttpStatus.OK);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @DeleteMapping("/{userId}")   // 회원탈퇴
    public ResponseEntity deleteUser(
            @PathVariable("userId") @Positive int userId){

        userService.DeleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
