import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { loginValidationSchema } from "../../utils/constants";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import { Formik } from "formik";

function Login({ loggedIn, onLogin, serverResponseMessage }) {
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
            <Form
              onSubmit={handleSubmit}
              submitButtonTitle='Войти'
              isValid={isValid}
              dirty={dirty}
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
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <FormField
                title='Пароль'
                name='password'
                type='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
