package com.backendPreProject.answer.dto;

import lombok.Getter;

@Getter
public class AnswerRequestDto {

    private int postNum;
    // 하나의 질문에 대한 answer들을 출력하기 위해서 answerId가 아닌 
    // 해당 질문에 대한 questonId가 필요하다.
    // 그래야 해당 질문들에 연관된 answer들의 목록이 출력이 가능하기 때문이다.

}
