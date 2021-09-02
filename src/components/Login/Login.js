import React from "react";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <div className='login'>
      <div className='login__content'>
        <img className='login__logo' src={logo} alt='logo' />
        <h1 className='login__title'>Рады видеть!</h1>
        <form className='login__form' action='' method='POST'>
          <fieldset className='login__form-fieldset'>
            <label className='login__input-label' htmlFor='email'>
              E-mail
            </label>
            <input className='login__input' type='email' id='email' />
            <span className='login__input-error'>Что-то пошло не так...</span>
          </fieldset>
          <fieldset className='login__form-fieldset'>
            <label className='login__input-label' htmlFor='email'>
              Пароль
            </label>
            <input className='login__input' type='password' id='password' />
            <span className='login__input-error login__input-error_active'>
              Что-то пошло не так...
            </span>
          </fieldset>
          <button className='login__submit-button' type='submit'>
            Войти
          </button>
          <p className='login__login-text'>
            Ещё не зарегистрированы?
            <span className='login__login-link'>Регистрация</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;