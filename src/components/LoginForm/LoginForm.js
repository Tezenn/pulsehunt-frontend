import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import "./style.css";

let LoginForm = props => {
  console.log(props);
  const { handleSubmit } = props;
};

loginSignupForm = reduxForm({
  form: "loginForm"
})(LoginForm);
