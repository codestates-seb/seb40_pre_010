package com.backendPreProject.backend_Preproject.question.mapper;


import com.backendPreProject.backend_Preproject.question.dto.QuestionPostDto;
import com.backendPreProject.backend_Preproject.question.dto.responseDto;
import com.backendPreProject.backend_Preproject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question QuestionPostDto(QuestionPostDto questionPostDto);

    responseDto questionToQuestionResponseDto(Question question);

}
