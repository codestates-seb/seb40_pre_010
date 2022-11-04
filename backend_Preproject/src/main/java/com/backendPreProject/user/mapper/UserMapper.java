package com.backendPreProject.user.mapper;

import com.backendPreProject.user.dto.UserLoginDto;
import com.backendPreProject.user.dto.UserPostDto;
import com.backendPreProject.user.dto.UserResponseDto;
import com.backendPreProject.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {



    User UserPostDto(UserPostDto userPostDto);


    UserResponseDto UserToUserResponseDto(User user);

    List<UserResponseDto> listUserToUserResponseDto(List<User> listUser);

}
