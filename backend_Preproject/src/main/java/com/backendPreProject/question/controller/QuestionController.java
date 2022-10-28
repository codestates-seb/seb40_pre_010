package com.backendPreProject.question.controller;

import com.backendPreProject.question.dto.QuestionPostDto;
import com.backendPreProject.question.entity.Question;
import com.backendPreProject.question.mapper.QuestionMapper;
import com.backendPreProject.question.server.QuestionService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;


@RestController
@RequestMapping("/")
@Validated
public class QuestionController {

    private QuestionService questionService;
    private QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper questionMapper){
        this.questionService=questionService;
        this.questionMapper=questionMapper;
    }

    @PostMapping("question")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionDto){

        Question question
                = questionService.createQuestion(questionMapper.QuestionPostDto(questionDto));

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }


    @GetMapping("{questionId}")   // 질문 조회: questionId로 질문들어가기
    public ResponseEntity getQuestion(
            @PathVariable("questionId") @Positive int questionId) {

        Question question= questionService.findQuestion(questionId);
        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }

    @GetMapping("word/{keyword}")  // 질문 검색:
    public ResponseEntity getQuestionWord(@PathVariable("keyword")String word) {

        List<Question> listQuestions=questionService.findQuestionWord(word);
        return new ResponseEntity<>(questionMapper.listQuestionToQuestionResponseDto(listQuestions), HttpStatus.OK);
    }

    @DeleteMapping("{questionId}")
    public ResponseEntity deleteQuestion(
            @PathVariable("questionId") @Positive int questionId) {

        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
