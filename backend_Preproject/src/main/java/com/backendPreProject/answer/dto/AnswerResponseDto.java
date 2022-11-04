package com.backendPreProject.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@AllArgsConstructor
@Getter
@Setter
public class AnswerResponseDto {

    private int answerId;

    private int postNum;

    private String userId; //

    private String answerBody;

    private String createdAt; //

}
