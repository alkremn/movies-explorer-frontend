import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { loginValidationSchema } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { Formik } from "formik";

function Login({ loggedIn, onLogin }) {
  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn, history]);

  return (
    <div className='login'>
      <div className='login__content'>
        <Link to='/'>
          <img className='login__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='login__title'>Рады видеть!</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            onLogin(values);
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
            <form className='login__form' method='POST' onSubmit={handleSubmit}>
              <fieldset className='login__form-fieldset'>
                <label className='login__input-label' htmlFor='email'>
                  E-mail
                </label>
                <input
                  className='login__input'
                  type='email'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span
                  className={`login__input-error ${
                    errors.email ? "login__input-error_active" : ""
                  }`}
                >
                  {errors.email && touched.email && errors.email}
                </span>
              </fieldset>
              <fieldset className='login__form-fieldset'>
                <label className='login__input-label' htmlFor='email'>
                  Пароль
                </label>
                <input
                  className='login__input'
                  type='password'
                  id='password'
                  name='password'
                  minLength='8'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <span
                  className={`login__input-error ${
                    errors.email ? "login__input-error_active" : ""
                  }`}
                >
                  {errors.password && touched.password && errors.password}
                </span>
              </fieldset>
              <button
                className={`login__submit-button ${
                  isValid && dirty ? " " : "login__submit-button_disabled"
                }`}
                type='submit'
                disabled={!(isValid && dirty)}
              >
                Войти
              </button>
              <p className='login__login-text'>
                Ещё не зарегистрированы?
                <Link to='/signup' className='login__login-link'>
                  Регистрация
                </Link>
              </p>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
