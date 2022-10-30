package com.backendPreProject.question.mapper;


import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.question.dto.QuestionPostDto;
import com.backendPreProject.question.dto.QuestionResponseDto;
import com.backendPreProject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question QuestionPostDto(QuestionPostDto questionPostDto);
    // 하나의 question을 입력하기 위한 Mapping

    QuestionResponseDto questionToQuestionResponseDto(Question question);
    // question을 post할때 결과 확인을 위한 Mapping
    
    QuestionResponseDto AnswersToQuestionResponseDto(Question question, List<Answer> answers);
    // question하나를 조회할때 하나의 question에 해당하는 answer들을 연관지어 출력해줌

    List<QuestionResponseDto> listQuestionToQuestionResponseDto(List<Question> listQuestions);
    // 문자열 키워드를 입력하면 해당 키워드가 포함된 제목의 question들을 출력 ( answer은 출력 안함 )
}
