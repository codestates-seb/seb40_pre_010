package com.backendPreProject.user.dto;

//import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class UserLoginDto {
    @NotBlank
    private String userId;  // 로그인 구현을 위해 추가
    @NotBlank
    private String userPw;
}
