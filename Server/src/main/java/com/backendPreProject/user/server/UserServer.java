package com.backendPreProject.user.server;

import com.backendPreProject.exception.BusinessLogicException;
import com.backendPreProject.exception.ExceptionCode;
import com.backendPreProject.question.entity.Question;
import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServer {

    private UserRepository userRepository;

    public UserServer(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public User CreateUser(User user){

        return userRepository.save(user);
    }

    public User FindUser(String userName){

        User findUser =userRepository.findByUserName(userName);

        if(findUser==null){
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }

        return userRepository.findByUserName(userName);
    }

    public void DeleteUser(int userId){

        User user=findVerifiedUser(userId);
        userRepository.delete(user);
    }

    public User findVerifiedUser(int userId){

        Optional<User> optionalUser = Optional.ofNullable(userRepository.findById(userId));

        User findUser=optionalUser.orElseThrow(()-> //만일 db에 저장된 유저 정보 없으면 예외발생
                new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }
}
