package com.ilabs.backend.repository;

import com.ilabs.backend.model.QuestionDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionDetailsRepository extends JpaRepository<QuestionDetails,Long> {
}
