package com.backendPreProject.backend_Preproject.question.controller;

import com.backendPreProject.backend_Preproject.question.dto.QuestionPostDto;
import com.backendPreProject.backend_Preproject.question.entity.Question;
import com.backendPreProject.backend_Preproject.question.mapper.QuestionMapper;
import com.backendPreProject.backend_Preproject.question.server.QuestionService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/v1/test1")
@Validated
public class QuestionController {

    private QuestionService questionService;
    private QuestionMapper questionMapper;

    public QuestionController(QuestionService questionService,
                              QuestionMapper questionMapper){
        this.questionService=questionService;
        this.questionMapper=questionMapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionDto){

        Question question
                = questionService.createQuestion(questionMapper.QuestionPostDto(questionDto));

        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
    }


    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(
            @PathVariable("question-id") @Positive int question_id) {
        Question question= questionService.findQuestion(question_id);
        return new ResponseEntity<>(questionMapper.questionToQuestionResponseDto(question), HttpStatus.OK);
    }




}
