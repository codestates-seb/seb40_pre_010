package com.backendPreProject.user.repository;

import com.backendPreProject.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findById(int userId);
    User findByUserName(String userName);
}
