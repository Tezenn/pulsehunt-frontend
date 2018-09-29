import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "../../styles.css";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../assets/logo.png";

class LoginSignupPage extends Component {
  render() {
    return (
      <div className="loginContainer">
        <img src={Logo} className="formLogo" alt="pulse hunt logo" />
        <div className="formContainer">
          <SignupForm />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginSignupPage;
