import React, { Component, useEffect, useState } from "react";
import "./Questions.css";
import axios from "axios";

function Questions() {
  const [Questiondetais, setQuestiondetails] = useState([]);
  useEffect(() => {
    loadQuestionDetails();
  }, []);

  const loadQuestionDetails = async () => {
    const result = await axios.get("http://localhost:8080/questionDetails");
    setQuestiondetails(result.data);
  };
  return (
    <div className="question-table card">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Questions</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Questiondetais.map((question, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{question.question}</td>
              <td>{question.category}</td>
              <td>
                {question.status === true ? (
                  <button className="btn published-button">Published</button>
                ) : (
                  <button className=" btn draft-button">Draft</button>
                )}
              </td>
              <td>
                <button className="btn action-btn">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Questions;
