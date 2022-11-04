package com.backendPreProject.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPostDto {
    @NotBlank (message = "ID를 작성해주세요.")
    private String userId;
    @NotBlank (message = "질문의 제목을 작성해주세요.")
    private String questionTitle;
    @NotBlank (message = "질문의 내용을 작성해주세요.")
    private String questionBody;

    private String questionTags;
}
