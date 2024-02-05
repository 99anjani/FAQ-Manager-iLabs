import React, { Component, useEffect, useState } from "react";
import "./Questions.css";
import axios from "axios";
import Action from "../Action/Action";

function Questions() {
  const [QuestionDetails, setQuestionDetails] = useState([]);
  useEffect(() => {
    loadQuestionDetails();
  }, []);

  const loadQuestionDetails = async () => {
    const result = await axios.get("http://localhost:8080/questionDetails");
    setQuestionDetails(result.data);
  };

  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="question-table">
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
          {QuestionDetails.map((question, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{question.question}</td>
              <td>{question.category}</td>
              <td>
                {question.status === true ? (
                  <button className="published-button">Published</button>
                ) : (
                  <button className="draft-button">Draft</button>
                )}
              </td>
              <td>
                <button
                  className="action-btn"
                  // onClick={() => setModalOpen(true)}
                >
                  ...
                </button>

                {/* {modalOpen && <Action />} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Questions;
