package com.backendPreProject.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class AnswerPostDto {

    private int postNum;

    @NotBlank (message = "답변 내용을 입력해주세요.")
    private String answerBody;
    @NotBlank (message = "ID를 입력해주세요.")
    private String userId;

}
