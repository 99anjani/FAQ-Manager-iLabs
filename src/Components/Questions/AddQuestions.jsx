import React, { useState } from "react";
import "./AddQuestions.css";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddQuestions() {
  let navigate = useNavigate();

  const [QuestionDetails, setQuestionDetails] = useState({
    question: "",
    category: "",
    status: "-1",
  });

  const { question, category, status } = QuestionDetails;

  const onInputChange = (e) => {
    setQuestionDetails({
      ...QuestionDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/question", QuestionDetails);
    navigate("/");
  };

  return (
    <div className="add-question-form">
      <div className="form-board-body card">
        <h2 className="form-header">
          Add Question <MapsUgcIcon />
        </h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-item">
            <label htmlFor="question" className="form-label">
              Question
            </label>
            <input
              className="form-input"
              type={"text"}
              name="question"
              id="question"
              value={question}
              placeholder="Enter Question ...."
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              className="form-input"
              type={"text"}
              name="category"
              id="category"
              value={category}
              placeholder="Enter Category ...."
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => onInputChange(e)}
              className="form-selected"
              required
            >
              <option value="-1">Options</option>
              <option value="true">Published</option>
              <option value="false">Save as Draft</option>
            </select>
          </div>

          <button type="submit" className="add-question-submit">
            Saved Question
          </button>
        </form>
        <div>
          <Link className="back-btn" to={"/"}>
            <ArrowBackIosNewIcon /> <span className="btn-name"> Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
