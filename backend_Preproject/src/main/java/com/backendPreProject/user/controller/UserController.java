package com.backendPreProject.user.controller;

import com.backendPreProject.user.dto.UserPostDto;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.mapper.UserMapper;
import com.backendPreProject.user.server.UserServer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/")
@Validated
public class UserController {

    private UserServer userServer;
    private UserMapper userMapper;

    public UserController(UserServer userServer, UserMapper userMapper){
        this.userServer=userServer;
        this.userMapper=userMapper;
    }

    @PostMapping("user")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){

        User user = userServer.CreateUser(userMapper.UserPostDto(userPostDto));

        return new ResponseEntity<>(userMapper.UserToUserResponseDto(user), HttpStatus.CREATED);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////
    // api명세서에 없는 기능 -> user 정보가 잘 저장되었나 확인 용도
    @GetMapping("user/{userName}")
    public ResponseEntity findUser(
            @PathVariable("userName") String userName){

        User user=userServer.FindUser(userName);

        return new ResponseEntity<>(userMapper.UserToUserResponseDto(user), HttpStatus.OK);
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////

    @DeleteMapping("user/{userId}")
    public ResponseEntity deleteUser(
            @PathVariable("userId") @Positive int userId){

        userServer.DeleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
