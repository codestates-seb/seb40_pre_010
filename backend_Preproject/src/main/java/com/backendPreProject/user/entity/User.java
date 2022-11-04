package com.backendPreProject.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;  // 사용자에 대한 고유번호

    @Column(nullable = false, updatable = false , unique = true) // 사용자가 회원가입시 직접 설정한 userId , 중복값 허용 X
    private String userId;

    @Column(nullable = false, updatable = false)
    private String userName;

    @Column(nullable = false, updatable= false)
    private String userPw;
}
