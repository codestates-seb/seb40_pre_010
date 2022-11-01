package com.backendPreProject.answer.service;

import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.answer.mapper.AnswerMapper;
import com.backendPreProject.answer.repository.AnswerRepository;
import com.backendPreProject.question.service.QuestionService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository,
                         QuestionService questionService,
                         AnswerMapper answerMapper){
        this.answerRepository=answerRepository;
    }

    public Answer createAnswer(Answer answer){

        return answerRepository.save(answer);
    }

    public List<Answer> findAnswers(int postNum){

        return answerRepository.findByPostNum(postNum);
    }

    public void deleteAnswer(int answerId){
        Answer answer=answerRepository.findById(answerId);
        answerRepository.delete(answer);
    }
}
