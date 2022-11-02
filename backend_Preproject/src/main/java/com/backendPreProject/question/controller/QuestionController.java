package com.backendPreProject.question.controller;

import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.answer.service.AnswerService;
import com.backendPreProject.question.dto.QuestionPostDto;
import com.backendPreProject.question.dto.QuestionResponseDto;
import com.backendPreProject.question.entity.Question;
import com.backendPreProject.question.mapper.QuestionMapper;
import com.backendPreProject.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.stream.Collectors;


@RestController
@RequestMapping("/question")
@Validated
public class QuestionController {

    private QuestionService questionService;
    private QuestionMapper questionMapper;
    private AnswerService answerService;

    public QuestionController(QuestionService questionService,
                              QuestionMapper questionMapper,
                              AnswerService answerService){
        this.questionService=questionService;
        this.questionMapper=questionMapper;
        this.answerService=answerService;
    }

    @PostMapping  // 질문 작성
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionDto){

        Question question
                = questionService.createQuestion(questionMapper.QuestionPostDto(questionDto));

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }


    @GetMapping("/{questionId}")   // 질문 조회: questionId로 질문들어가기
    public ResponseEntity getQuestion(
            @PathVariable("questionId") @Positive int questionId) {

        Question question= questionService.findQuestion(questionId);
        List<Answer> answers=answerService.findAnswers(questionId);
        // 하나의 question에 관한 answers들을 함께 출력하기 위해
        // question과 answers가 필요
        // 2개의 데이터는 mapper를 통해 하나의 question에 여러 answer들이 붙어있는 형태로 출력함

        return new ResponseEntity<>(questionMapper.AnswersToQuestionResponseDto(question,answers), HttpStatus.OK);
    }

    @GetMapping("/questions")   // 전체 질문 조회
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.findQuestions();

        List<QuestionResponseDto> response = questions.stream().map(question -> questionMapper.questionToQuestionResponseDto(question)).collect(Collectors.toList());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/word/{word}")  // 질문 검색: 타이틀에 포함된 키워드 검색
    public ResponseEntity getQuestionWord(@PathVariable("word")String word) {

        List<Question> listQuestions=questionService.findQuestionWord(word);
        return new ResponseEntity<>(questionMapper.listQuestionToQuestionResponseDto(listQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{questionId}")
    public ResponseEntity deleteQuestion(
            @PathVariable("questionId") @Positive int questionId) {

        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
