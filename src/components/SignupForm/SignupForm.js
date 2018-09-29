import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import "../../styles.css";

let SignupForm = props => {
  console.log(props);
  const { handleSubmit } = props;
  return <div />;
};

SignupForm = reduxForm({
  form: "SignupForm"
})(SignupForm);

export default SignupForm;
