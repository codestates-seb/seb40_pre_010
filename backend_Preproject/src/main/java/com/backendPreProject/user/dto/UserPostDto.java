package com.backendPreProject.user.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class UserPostDto {

    @NotBlank ( message = "ID를 꼭 입력해주세요")
    private String userId;  // 로그인 구현을 위해 추가
    @NotBlank
    private String userName;

    private String userPw;

}
