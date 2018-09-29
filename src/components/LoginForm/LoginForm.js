import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import "../../styles.css";

let LoginForm = props => {
  console.log(props);
  const { handleSubmit } = props;
  return <div />;
};

LoginForm = reduxForm({
  form: "loginForm"
})(LoginForm);

export default LoginForm;
