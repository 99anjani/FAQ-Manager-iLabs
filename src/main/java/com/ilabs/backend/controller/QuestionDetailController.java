package com.ilabs.backend.controller;

import com.ilabs.backend.exception.QuestionNotFoundException;
import com.ilabs.backend.model.QuestionDetails;
import com.ilabs.backend.repository.QuestionDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class QuestionDetailController {
    @Autowired
    private QuestionDetailsRepository questionDetailsRepository;
    @PostMapping("/question")
    QuestionDetails newQuestion(@RequestBody QuestionDetails newQuestion){
        return questionDetailsRepository.save(newQuestion);
    }
    @GetMapping("/questionDetails")
    List<QuestionDetails> getQuestionDetails(){
        return questionDetailsRepository.findAll();
    }

    @GetMapping("/questionDetails/{id}")
        QuestionDetails getQuestionById(@PathVariable Long id){
            return questionDetailsRepository.findById(id)
                .orElseThrow(()->new QuestionNotFoundException(id));

        }
    @DeleteMapping("/questionDetails/{id}")
    String deleteUser(@PathVariable Long id){
        if (!questionDetailsRepository.existsById(id)){
            throw new QuestionNotFoundException(id);
        }
        questionDetailsRepository.deleteById(id);
        return "Question with id "+id+" deleted successful!";
    }

}
