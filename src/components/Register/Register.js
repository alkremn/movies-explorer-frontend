import React, { useEffect, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";

import { validateForm } from "../../utils/utils";

function Register({ loggedIn, onRegister, serverResponseMessage }) {
  const [isSubmitButtonAcitve, setIsSubmitButtonActive] = useState(true);

  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [touched, setTouched] = useState({
    name: "",
    email: false,
    password: false,
  });

  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn, history]);

  useEffect(() => {
    const formIsValid = validateForm(errors, touched);
    setIsSubmitButtonActive(formIsValid);
  }, [values, errors, touched]);

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

  function validateInput(inputElement) {
    setErrors({
      ...errors,
      [inputElement.name]: inputElement.validationMessage,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    onRegister(values);
  }

  return (
    <div className='register'>
      <div className='register__content'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <Form
          onSubmit={handleFormSubmit}
          submitButtonTitle='Зарегистрироваться'
          isSubmitButtonAcitve={isSubmitButtonAcitve}
          bottomText='Уже зарегистрированы?'
          bottomLink='/signin'
          bottomTitle='Войти'
          serverError={serverResponseMessage}
        >
          <FormField
            title='Имя'
            name='name'
            type='text'
            minLength='2'
            maxLength='30'
            value={values.name}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={errors.name}
            touched={touched.name}
          />
          <FormField
            title='E-mail'
            name='email'
            type='email'
            value={values.email}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={errors.email}
            touched={touched.email}
          />
          <FormField
            title='Пароль'
            name='password'
            type='password'
            value={values.password}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            error={errors.password}
            touched={touched.password}
          />
        </Form>
      </div>
    </div>
  );
}

export default Register;
