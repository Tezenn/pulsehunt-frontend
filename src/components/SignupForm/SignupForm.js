import React from "react";
import { Field, Fields, reduxForm } from "redux-form";
import "../../styles.css";

let SignupForm = props => {
  this.active = false;
  console.log(props);
  const { handleSubmit } = props;
  return (
    <div className="formBox">
      <Field />
    </div>
  );
};

SignupForm = reduxForm({
  form: "SignupForm"
})(SignupForm);

export default SignupForm;
