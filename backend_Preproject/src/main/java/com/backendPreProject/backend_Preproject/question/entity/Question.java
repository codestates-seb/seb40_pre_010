package com.backendPreProject.backend_Preproject.question.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int question_id;    // 질문 번호, 아이디는 jpa가 자동으로 카운트

//    @Column(nullable = false, updatable = false)
//    private String question_author; // 작성자 이름 -> 이름은 공백X, 이름 수정X

    @Column(nullable = false)
    private String question_title;  // 글 제목 -> 제목은 공백X

    @Column(nullable = false)
    private String question_body;   // 글의 내용 -> 내용은 공백X

//    @Column(nullable = true)
//    private String question_tags;   // 글에 달려있는 태크 -> 태그는 없을 수 있음
//
//    @Column(nullable = false, updatable = true)
//    private LocalDateTime created_at = LocalDateTime.now(); // 글이 생성된 시간, 작성 시간은 글 수정시 업테이트 가능

}
// AAA