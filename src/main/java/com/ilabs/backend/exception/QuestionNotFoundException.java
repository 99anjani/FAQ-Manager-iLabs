package com.ilabs.backend.exception;

public class QuestionNotFoundException extends RuntimeException{
    public QuestionNotFoundException(Long id) {
        super(" Question Not Found using with id:" + id);
    }
}
