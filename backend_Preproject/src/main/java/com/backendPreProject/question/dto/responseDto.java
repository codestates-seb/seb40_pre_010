package com.backendPreProject.question.dto;


import lombok.*;

@AllArgsConstructor
@Getter
public class responseDto {

    private int questionId;    // 질문 번호, 아이디는 jpa가 자동으로 카운트

//    private String question_author; // 작성자 이름

    private String questionTitle;  // 글 제목

    private String questionBody;   // 글의 내용

    private String questionTags;   // 글에 달려있는 태크


}
