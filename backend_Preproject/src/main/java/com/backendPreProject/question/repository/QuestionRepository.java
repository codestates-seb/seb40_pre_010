package com.backendPreProject.question.repository;

import com.backendPreProject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

    Question findById(int questionId);
    List<Question> findByQuestionTitleContaining(String word);
}

