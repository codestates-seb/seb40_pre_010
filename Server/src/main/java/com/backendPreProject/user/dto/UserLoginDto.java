package com.backendPreProject.user.dto;

//import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class UserLoginDto {
    @NotBlank (message = "ID 를 입력해주세요.")
    private String userId;  // 로그인 구현을 위해 추가
    @NotBlank (message = "비밀번호를 입력해주세요.")
    private String userPw;
}
