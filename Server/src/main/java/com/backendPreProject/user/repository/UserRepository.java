package com.backendPreProject.user.repository;

import com.backendPreProject.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    User findById(int id);   // 고유 ID로 조회

    List<User> findAll();
    User findByUserId(String userId); // user 가 직접 설정한 userId 로 조회
    User findByUserName(String userName);
}
