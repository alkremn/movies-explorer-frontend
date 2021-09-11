import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form({
  onSubmit,
  isValid,
  dirty,
  submitButtonTitle,
  bottomText,
  bottomLink,
  bottomTitle,
  serverError,
  children,
}) {
  return (
    <form className='form' method='POST' onSubmit={onSubmit}>
      <div className='form__top'>{children}</div>
      <div className='form__bottom'>
        <p
          className={`form__server-error ${
            serverError ? "form__server-error_active" : ""
          }`}
        >
          {serverError}
        </p>
        <button
          className={`form__submit-button ${
            isValid && dirty ? " " : "form__submit-button_disabled"
          }`}
          type='submit'
          disabled={!(isValid && dirty)}
        >
          {submitButtonTitle}
        </button>
        <p className='form__bottom-text'>
          {bottomText}
          <Link to={bottomLink} className='form__bottom-link'>
            {bottomTitle}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
