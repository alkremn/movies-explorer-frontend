import React from "react";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className='register'>
      <div className='register__content'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <form className='register__form' action='' method='POST'>
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='name'>
              Имя
            </label>
            <input className='register__input' type='text' id='name' />
            <span className='register__input-error'>
              Что-то пошло не так...
            </span>
          </fieldset>
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='email'>
              E-mail
            </label>
            <input className='register__input' type='email' id='email' />
            <span className='register__input-error'>
              Что-то пошло не так...
            </span>
          </fieldset>
          <fieldset className='register__form-fieldset'>
            <label className='register__input-label' htmlFor='email'>
              Пароль
            </label>
            <input className='register__input' type='password' id='password' />
            <span className='register__input-error register__input-error_active'>
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className='register__submit-button' type='submit'>
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
