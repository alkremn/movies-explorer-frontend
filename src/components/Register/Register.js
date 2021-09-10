import React, { useEffect, useState } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import authApi from "../../utils/AuthApi";

function validateForm(errors, touched) {
  const formIsValid = !Object.values(errors).some((error) => error.length > 0);
  const untouched = !Object.values(touched).some(
    (touched) => touched === false
  );

  return formIsValid && untouched;
}

function Register({ loggedIn }) {
  const history = useHistory();

  const [isSubmitButtonAcitve, setIsSubmitButtonActive] = useState(true);

  const [values, setValues] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({ email: "", password: "", name: "" });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    name: false,
  });

  useEffect(() => {
    if (loggedIn) {
      history.push("/");
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
    console.log(e);
    //onAuthorize(values);
  }

  // function loginHandler(e) {
  //   e.preventDefault();
  //   authApi
  //     .register({
  //       email: "alexk@zyto.com",
  //       password: "ALALALAasdf",
  //       name: "Alexey Kremenv",
  //     })
  //     .then((res) => console.log(res));
  // }

  return (
    <div className='register'>
      <div className='register__content'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form
          className='register__form'
          action=''
          method='POST'
          onSubmit={handleFormSubmit}
        >
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='name'>
              Имя
            </label>
            <input
              className='register__input'
              id='name'
              type='text'
              name='name'
              minLength='2'
              maxLength='30'
              value={values.name}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              required
            />
            <span
              className={`register__input-error ${
                errors.name ? "register__input-error_active" : ""
              }`}
            >
              {errors.name}
            </span>
          </fieldset>
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='email'>
              E-mail
            </label>
            <input
              className='register__input'
              type='email'
              id='email'
              name='email'
              value={values.email}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              required
            />
            <span
              className={`register__input-error ${
                errors.email ? "register__input-error_active" : ""
              }`}
            >
              {errors.email}
            </span>
          </fieldset>
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='email'>
              Пароль
            </label>
            <input
              className='register__input'
              type='password'
              id='password'
              name='password'
              minLength='8'
              value={values.password}
              onChange={handleInputChange}
              onBlur={handleInputChange}
              required
            />
            <span
              className={`register__input-error ${
                errors.password ? "register__input-error_active" : ""
              }`}
            >
              {errors.password}
            </span>
          </fieldset>
          <button
            className={`register__submit-button ${
              isSubmitButtonAcitve ? " " : "register__submit-button_disabled"
            }`}
            type='submit'
          >
            Зарегистрироваться
          </button>
          <p className='register__login-text'>
            Уже зарегистрированы?
            <Link to='/signin' className='register__login-link'>
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
