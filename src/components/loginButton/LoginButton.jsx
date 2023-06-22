import React, { useContext } from "react";
import "./loginbutton.css";
import { AuthContex } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { googleSsigin } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from;
  const googleSIn = () => {
    googleSsigin()
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setTimeout(() => {
          if (from) {
            navigate(from);
          } else {
            navigate("/");
          }
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={googleSIn}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginButton;
