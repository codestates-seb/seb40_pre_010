package com.backendPreProject.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class UserResponseDto {


    private int Id; // 유저의 고유한 Id

    private String userId;

    private String userName;

}
