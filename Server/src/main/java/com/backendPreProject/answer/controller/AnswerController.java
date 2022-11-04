package com.backendPreProject.answer.controller;

import com.backendPreProject.answer.dto.AnswerPostDto;
import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.answer.mapper.AnswerMapper;
import com.backendPreProject.answer.service.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answer")
@Validated
public class AnswerController {

    private AnswerService answerService;
    private AnswerMapper answerMapper;

    public AnswerController(AnswerService answerService,
                            AnswerMapper answerMapper){
        this.answerService=answerService;
        this.answerMapper=answerMapper;
    }

    @PostMapping // 코멘트 등록
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){

        Answer answer=answerService.createAnswer(answerMapper.AnswerPostDto(answerPostDto));


        return new ResponseEntity<>(answerMapper.AnswerToAnswerResponseDto(answer), HttpStatus.CREATED);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    // answer저장 확인용, api명세서에는 없음

    @GetMapping("/{questionId}")  //postnum(questionId) 에 해당하는 코멘트 전체 조회
    public ResponseEntity getAnswers(
            @PathVariable("questionId") @Positive int questionId){

        List<Answer> listAnswers=answerService.findAnswers(questionId);
        return new ResponseEntity<>(answerMapper.listAnswerToAnswerResponseDto(listAnswers), HttpStatus.OK);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////


    @DeleteMapping("/{answerId}")  // 코멘트 삭제
    public ResponseEntity deleteAnswer(
            @PathVariable("answerId") @Positive int answerId) {

        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
