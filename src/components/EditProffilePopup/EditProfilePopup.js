import React, { useContext, useEffect, useState } from "react";
import "./EditProfilePopup.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { validateForm } from "../../utils/utils";

function EditProfilePopup({
  isOpen,
  onUpdateUser,
  isLoading,
  onPopupClose,
  serverResponseMessage,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [isSubmitButtonAcitve, setIsSubmitButtonActive] = useState(true);

  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [touched, setTouched] = useState({ name: false, email: false });

  useEffect(() => {
    if (isOpen) {
      resetForm();
      if (currentUser) {
        setValues({
          name: currentUser.name,
          email: currentUser.email,
        });
        setTouched({
          name: true,
          email: true,
        });
      }
    }
  }, [isOpen, currentUser]);

  useEffect(() => {
    const formIsValid = validateForm(errors, touched);
    if (currentUser) {
      if (
        currentUser.name === values.name &&
        currentUser.email === values.email
      ) {
        setIsSubmitButtonActive(false);
      } else {
        setIsSubmitButtonActive(formIsValid);
      }
    }
  }, [values, errors, touched, currentUser]);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setTouched({
      ...touched,
      [name]: true,
    });

    validateInput(e.target);
  }

  function resetForm() {
    setValues({
      name: "",
      email: "",
    });
    setErrors({
      name: "",
      email: "",
    });
    setTouched({
      name: false,
      email: false,
    });
    setIsSubmitButtonActive(false);
  }

  function validateInput(inputElement) {
    setErrors({
      ...errors,
      [inputElement.name]: inputElement.validationMessage,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  function handleCloseClick() {
    onPopupClose();
    resetForm();
  }

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <form className='popup__form' onSubmit={handleFormSubmit}>
        <button
          className='popup__close-button'
          type='button'
          onClick={handleCloseClick}
        />
        <h2 className='popup__title'>Редактировать профиль</h2>
        <input
          className='form__input'
          id='form_name'
          type='text'
          name='name'
          value={values.name}
          onChange={handleInputChange}
          onBlur={handleInputChange}
          placeholder='Имя'
          minLength='2'
          maxLength='30'
          required
        />
        <p
          className={`popup__input-error ${
            errors.name ? "popup__error_visible" : ""
          }`}
        >
          {errors.name && touched.name && errors.name}
        </p>
        <input
          className='form__input'
          placeholder='E-mail'
          id='form_email'
          type='email'
          name='email'
          value={values.email}
          onChange={handleInputChange}
          onBlur={handleInputChange}
          required
        />
        <p
          className={`popup__input-error ${
            errors.email ? "popup__error_visible" : ""
          }`}
        >
          {errors.email && touched.email && errors.email}
        </p>
        <p
          className={`popup__error-message ${
            serverResponseMessage ? "popup__error-message_visible" : ""
          }`}
        >
          {serverResponseMessage}
        </p>
        <button
          className={`popup__button ${
            !isSubmitButtonAcitve ? "popup__button_disabled" : ""
          }`}
          type='submit'
          disabled={!isSubmitButtonAcitve}
        >
          {isLoading ? "Сохранение..." : "Сохранить"}
        </button>
      </form>
    </div>
  );
}

export default EditProfilePopup;
