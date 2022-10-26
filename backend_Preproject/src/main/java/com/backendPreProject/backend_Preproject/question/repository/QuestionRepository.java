package com.backendPreProject.backend_Preproject.question.repository;

import com.backendPreProject.backend_Preproject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {

    //@Query("입력된 문자열이 포함된 데이터들을 모두 찾기")
    Question findById(int question_id);
}

