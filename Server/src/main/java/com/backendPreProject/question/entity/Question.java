package com.backendPreProject.question.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private int questionId;    // 질문 번호, 아이디는 jpa가 자동으로 카운트

    @Column(nullable = false)
    private String userId;

    @Column(nullable = false)
    private String questionTitle;  // 글 제목 -> 제목은 공백X

    @Column(nullable = false)
    private String questionBody;   // 글의 내용 -> 내용은 공백X

    @Column(nullable = true)
    private String questionTags;   // 글에 달려있는 태크 -> 태그는 없을 수 있음

    @Column(nullable = false, updatable = true)
    private String createdAt = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now());

}