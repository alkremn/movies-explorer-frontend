import React from "react";
import "./FormField.css";

function FormField({
  title,
  name,
  type,
  value,
  minLength,
  maxLength,
  onChange,
  onBlur,
  error,
  touched,
}) {
  return (
    <fieldset className='form-field'>
      <label className='form-field__label' htmlFor={name}>
        {title}
      </label>
      <input
        className='form-field__input'
        id={name}
        type={type}
        name={name}
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      <p
        className={`form-field__error ${
          error ? "form-field__error_active" : ""
        }`}
      >
        {error && touched && error}
      </p>
    </fieldset>
  );
}

export default FormField;
