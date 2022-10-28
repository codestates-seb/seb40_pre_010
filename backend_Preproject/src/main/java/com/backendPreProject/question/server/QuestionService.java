package com.backendPreProject.question.server;


import com.backendPreProject.question.entity.Question;
import com.backendPreProject.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository){
        this.questionRepository=questionRepository;
    }

    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }

    public Question findQuestion(int questionId){
        return questionRepository.findById(questionId);
    }

    public List<Question> findQuestionWord(String word){
        return questionRepository.findByQuestionTitleContaining(word);
    }

    public void deleteQuestion(int questionId) {
        Question question= questionRepository.findById(questionId);
        questionRepository.delete(question);
    }

}
