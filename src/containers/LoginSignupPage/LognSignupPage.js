import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import "../../styles.css";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../assets/logo.png";

class LoginSignupPage extends Component {
  state = {
    activeSignup: false
  };

  onLoginSubmit(e) {
    e.preventDefault();
    
  }

  toggleSignup() {
    this.setState({
      activeSignup: !this.state.activeSignup
    });
  }
  render() {
    return (
      <div className="loginContainer">
        <img src={Logo} className="formLogo" alt="pulse hunt logo" />
        <div className="formContainer">
          {!this.state.activeSignup ? (
            <button
              type="button"
              className="standardButton"
              onClick={() => this.toggleSignup()}>
              <h2>SIGN UP</h2>
            </button>
          ) : (
            <SignupForm />
          )}
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default LoginSignupPage;
