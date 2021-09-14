import React, { useContext, useEffect, useRef } from "react";
import "./EditProfilePopup.css";

import { Formik } from "formik";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { profileValidationSchema } from "../../utils/constants";

function EditProfilePopup({
  isOpen,
  onUpdateUser,
  isLoading,
  onPopupClose,
  serverResponseMessage,
}) {
  const currentUser = useContext(CurrentUserContext);
  const formikRef = useRef(null);

  useEffect(() => {
    if (isOpen && currentUser) {
      if (formikRef.current) {
        formikRef.current.setFieldValue("name", currentUser.name);
        formikRef.current.setFieldValue("email", currentUser.email);
        setTimeout(() => formikRef.current.setFieldTouched("name", true));
      }
    }
  }, [isOpen, currentUser]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <Formik
        innerRef={formikRef}
        enableReinitialize
        initialValues={{ name: "", email: "" }}
        validationSchema={profileValidationSchema}
        onSubmit={(values) => {
          onUpdateUser(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form className='popup__form' onSubmit={handleSubmit}>
            <button
              className='popup__close-button'
              type='button'
              onClick={onPopupClose}
            />
            <h2 className='popup__title'>Редактировать профиль</h2>
            <input
              className='form__input'
              id='form_name'
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Имя'
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
              onChange={handleChange}
              onBlur={handleBlur}
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
                !(isValid && dirty) ? "popup__button_disabled" : ""
              }`}
              type='submit'
              disabled={!(isValid && dirty)}
            >
              {isLoading ? "Сохранение..." : "Сохранить"}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EditProfilePopup;
