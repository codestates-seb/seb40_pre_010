package com.backendPreProject.answer.repository;

import com.backendPreProject.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Integer> {

    Answer findById(int answerId);
    List<Answer> findByPostNum(int postNum);
}
