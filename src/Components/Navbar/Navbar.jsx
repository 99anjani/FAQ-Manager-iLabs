import React from "react";
import "./Navbar.css";
import LoupeIcon from "@mui/icons-material/Loupe";
function Navbar() {
  return (
    <div>
      <nav className="navbar ">
        <div className="container-fluid">
          <h3>FAQ manager - iLabs</h3>
          <button className="btn add-question-button">
            <LoupeIcon className="add" /> Add Question
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
