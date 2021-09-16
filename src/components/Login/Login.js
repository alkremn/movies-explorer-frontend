import React, { useEffect, useState } from "react";
import "./Login.css";
import { useHistory } from "react-router";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";

import {validateForm} from '../../utils/utils'

function Login({ loggedIn, onLogin, serverResponseMessage }) {
  const [isSubmitButtonAcitve, setIsSubmitButtonActive] = useState(true);

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });

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
    onLogin(values);
  }

  return (
    <div className='login'>
      <div className='login__content'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <Form
          onSubmit={handleFormSubmit}
          submitButtonTitle='Войти'
          isSubmitButtonAcitve={isSubmitButtonAcitve}
          bottomText=' Ещё не зарегистрированы?'
          bottomLink='/signup'
          bottomTitle='Регистрация'
          serverError={serverResponseMessage}
        >
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
            minLength='8'
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

export default Login;
