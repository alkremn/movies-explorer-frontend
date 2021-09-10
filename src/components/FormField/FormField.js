import React from "react";
import "./FormField.css";

function FormField({
  title,
  name,
  type,
  value,
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
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      <span
        className={`form-field__error ${
          error ? "form-field__error_active" : ""
        }`}
      >
        {error && touched && error}
      </span>
    </fieldset>
  );
}

export default FormField;
