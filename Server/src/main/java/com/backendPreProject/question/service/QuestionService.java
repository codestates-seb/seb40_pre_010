package com.backendPreProject.question.service;


import com.backendPreProject.answer.entity.Answer;
import com.backendPreProject.answer.repository.AnswerRepository;
import com.backendPreProject.exception.BusinessLogicException;
import com.backendPreProject.exception.ExceptionCode;
import com.backendPreProject.question.entity.Question;
import com.backendPreProject.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    private AnswerRepository answerRepository;

    public QuestionService(QuestionRepository questionRepository,
                           AnswerRepository answerRepository){
        this.questionRepository=questionRepository;
        this.answerRepository=answerRepository;
    }

    public Question createQuestion(Question question){

        return questionRepository.save(question);
    }

    public Question findQuestion(int questionId){
        // question이 존재하는 경우 해당question반환, 아니면 예외처리
        Question question = findVerifiedQuestion(questionId);

        return question;
    }

    public List<Question> findQuestions(){     // 질문 전체 조회
        List<Question> questions = questionRepository.findAll();

        return questions;
    }

    public List<Question> findQuestionWord(String word){
        // question이 존재하는 경우 해당question반환, 아니면 예외처리
        // word로 입력받았기 때문에 해당 word에 해당하는 question하나를 찾고 question에 해당하는 id를 입력하여 진행

        List<Question> listQuestions=questionRepository.findByQuestionTitleContaining(word);

        // error1: listQuestions에 값이 없는 경우
        //Question question = findVerifiedQuestion(listQuestions.get(0).getQuestionId());

        // error2: 단독으로 쓰이는 경우
        //throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);

        if(listQuestions.size()==0){
            throw new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND);
        }

        return questionRepository.findByQuestionTitleContaining(word);
    }

    public void deleteQuestion(int questionId) {
        // questionId에 부합하는 question이 있으면 삭제, 아니면 예외처리
        Question question = findVerifiedQuestion(questionId);

        // question에 달려있는 answers를 list로 받음
        List<Answer> answers=answerRepository.findByPostNum(questionId);
        for(Answer answer:answers){
            answerRepository.delete(answer);    // stream으로 구현 못함...
            // 향상된 for문으로 받은 코멘트들을 삭제
        }

        questionRepository.delete(question);
    }



    // question의 유무를 확인하는 메서드 + 예외처리 있음
    public Question findVerifiedQuestion(int questionId){ //요청된 답이 DB에 없으면 에러
        Optional<Question> optionalQuestionId = Optional.ofNullable(questionRepository.findById(questionId)); //
        Question findQuestion = optionalQuestionId.orElseThrow(()->
                new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

}
