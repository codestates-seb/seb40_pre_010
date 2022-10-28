package com.backendPreProject.question.mapper;


import com.backendPreProject.question.dto.QuestionPostDto;
import com.backendPreProject.question.dto.responseDto;
import com.backendPreProject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question QuestionPostDto(QuestionPostDto questionPostDto);

    responseDto questionToQuestionResponseDto(Question question);

    List<responseDto> listQuestionToQuestionResponseDto(List<Question> listQuestions);

}
