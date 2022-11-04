package com.backendPreProject.user.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class UserPostDto {

    @NotBlank ( message = "ID는 필수 입력 사항입니다.")
    private String userId;  // 로그인 구현을 위해 추가
    @NotBlank (message = "이름은 필수 입력 사항입니다.")
    private String userName;
    @NotBlank (message = "비밀번호는 필수 입력 사항입니다.")
    private String userPw;

}
