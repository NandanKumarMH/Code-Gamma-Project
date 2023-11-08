import React from "react";
import ErrorImage from "../../Assets/Images/000-404.png";
import { useNavigate } from "react-router-dom";

const ErrorPage404 = () => {
  const navigate = useNavigate("");
  const NavigateHandler = () => {
    navigate("/");
  };
  return (
    <div className="ErrorPage">
      <img class="error_image" src={ErrorImage} alt="404 Error" />
      <h1>404 ERROR</h1>
      <p>Page not found!</p>
      <div className="view_All_Btn">
        <button onClick={NavigateHandler}>Go to homepage</button>
      </div>
    </div>
  );
};

export default ErrorPage404;
