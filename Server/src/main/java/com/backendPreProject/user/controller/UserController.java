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
import java.util.List;

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


    @GetMapping("/{userId}") // 특정 회원 조회
    public ResponseEntity findUser(
            @PathVariable("userId") String userId){

        User user= userService.FindUser(userId);

        return new ResponseEntity<>(userMapper.UserToUserResponseDto(user), HttpStatus.OK);
    }

    @GetMapping("/users") // 회원 전체 조회
    public ResponseEntity findUsers(){

        List<User> users = userService.FindUsers();

        return new ResponseEntity<>(userMapper.listUserToUserResponseDto(users), HttpStatus.OK);
    }


    @DeleteMapping("/{userId}")   // 회원탈퇴
    public ResponseEntity deleteUser(
            @PathVariable("userId") @Positive int userId){

        userService.DeleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
