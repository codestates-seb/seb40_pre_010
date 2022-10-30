package com.backendPreProject.answer.controller;

import com.backendPreProject.answer.dto.AnswerPostDto;
import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.answer.mapper.AnswerMapper;
import com.backendPreProject.answer.server.AnswerServer;
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
public class AnswerController {

    private AnswerServer answerServer;
    private AnswerMapper answerMapper;

    public AnswerController(AnswerServer answerServer,
                            AnswerMapper answerMapper){
        this.answerServer=answerServer;
        this.answerMapper=answerMapper;
    }

    @PostMapping("answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer=answerServer.createAnswer(answerMapper.AnswerPostDto(answerPostDto));


        return new ResponseEntity<>(answerMapper.AnswerToAnswerResponseDto(answer), HttpStatus.CREATED);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // answer저장 확인용, api명세서에는 없음

    @GetMapping("answer/{questionId}")
    public ResponseEntity getAnswers(
            @PathVariable("questionId") @Positive int questionId){

        List<Answer> listAnswers=answerServer.findAnswers(questionId);
        return new ResponseEntity<>(answerMapper.listAnswerToAnswerResponseDto(listAnswers), HttpStatus.OK);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////


    @DeleteMapping("answer/{answerId}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answerId") @Positive int answerId) {

        answerServer.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
