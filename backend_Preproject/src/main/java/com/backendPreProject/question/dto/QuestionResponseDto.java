package com.backendPreProject.question.dto;

import com.backendPreProject.answer.dto.AnswerResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class QuestionResponseDto {

    private int questionId;    // 질문 번호, 아이디는 jpa가 자동으로 카운트

    private String userId; // 작성자 Id

    private String questionTitle;  // 글 제목

    private String questionBody;   // 글의 내용

    private String questionTags;   // 글에 달려있는 태크

    private LocalDateTime createdAt = LocalDateTime.now();

    private List<AnswerResponseDto> answers; // answer의 응답을 추가함
                                                                        // <>안에 response는 answer의 response이다.
}
