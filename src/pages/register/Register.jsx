import "./register.css";
import Background from "../../components/background";
import React from "react";

export default function Register() {
  return (
    <div className="login">
      <Background />
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <h3 className="loginLogo">Welcome New Travelers!</h3>
            <span className="loginDesc">
              Please put your identity here to connect with other holder and conquer the metaverse together
            </span>
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
