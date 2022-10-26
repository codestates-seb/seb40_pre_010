package com.backendPreProject.backend_Preproject.question.server;


import com.backendPreProject.backend_Preproject.question.entity.Question;
import com.backendPreProject.backend_Preproject.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository=questionRepository;
    }

    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }

    public Question findQuestion(int question_id){
        return questionRepository.findById(question_id);
    }


}
