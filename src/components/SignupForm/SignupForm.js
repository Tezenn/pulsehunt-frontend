import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import "../../styles.css";

class SignupForm extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    let test = this.state.username + ":" + this.state.password;
    console.log("test: ", test);
    e.preventDefault();
    fetch("http://localhost:3001/signin", {
      headers: new Headers({
        'Authorization': + btoa(test),
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="loginOrSignupForm">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit" className="standardButton">
          LOG IN
        </button>
      </form>
    );
  }
}

export default SignupForm;
