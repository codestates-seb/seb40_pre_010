package com.backendPreProject.answer.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId;

    @Column(updatable = false)
    private int postNum;

    @Column(nullable = false)
    private String userId; // 댓글 작성자 Id

    @Column(nullable = false)
    private String answerBody;

    @Column(nullable = false, updatable = true)
    private LocalDateTime createdAt = LocalDateTime.now(); // 글이 생성된 시간, 작성 시간은 글 수정시 업테이트 가능

}
