package com.backendPreProject.answer.mapper;


import com.backendPreProject.answer.dto.AnswerPostDto;
import com.backendPreProject.answer.dto.AnswerResponseDto;
import com.backendPreProject.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    Answer AnswerPostDto(AnswerPostDto answerPostDto);

    AnswerResponseDto AnswerToAnswerResponseDto(Answer Answers);

    List<AnswerResponseDto> listAnswerToAnswerResponseDto(List<Answer> listAnswers);

}
