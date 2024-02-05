import React from "react";
import "./Navbar.css";
import LoupeIcon from "@mui/icons-material/Loupe";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <h3>FAQ manager - iLabs</h3>
          <Link className="btn add-question-button" to={"/addQuestion"}>
            <LoupeIcon className="add" /> Add Question
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
