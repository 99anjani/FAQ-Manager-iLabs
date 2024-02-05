import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <span className="left-footer">
          copyright &copy; iLabs. All Right Reserved
        </span>
        <span className="right-footer">
          <span>@Privacy Policy</span>
          <span class="vertical-line"></span>
          <span>Terms of Service</span>
          <span class="vertical-line"></span>
          <span>Help Center</span>
        </span>
      </div>
    </div>
  );
}
export default Footer;
