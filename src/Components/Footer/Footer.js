import React from "react";
import logo from "../../Assets/Images/company logo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const HomeNavHandler = () => {
    navigate("/");
  };
  return (
    <div className="footer_Main">
      <div className="Footer">
        <div
          className="footer_Logo"
          style={{ cursor: "pointer" }}
          onClick={HomeNavHandler}
        >
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer_About_Us">
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Feedback</li>
        </div>
        <div className="footer_Privacy">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
