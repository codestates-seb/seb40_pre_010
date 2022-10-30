package com.backendPreProject.user.server;

import com.backendPreProject.user.entity.User;
import com.backendPreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

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
        return userRepository.findByUserName(userName);
    }

    public void DeleteUser(int userId){
        User user=userRepository.findById(userId);
        userRepository.delete(user);
    }
}
