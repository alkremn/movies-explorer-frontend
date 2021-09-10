import React, { useEffect } from "react";
import "./Register.css";
import { useHistory } from "react-router";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { registerValidationSchema } from "../../utils/constants";
import Form from "../Form/Form";
import FormField from "../FormField/FormField";
import { Formik } from "formik";

const initialvalues = {
  name: "",
  email: "",
  password: "",
};

function Register({ loggedIn, onRegister }) {
  const history = useHistory();
  useEffect(() => {
    if (loggedIn) {
      history.push("/movies");
    }
  }, [loggedIn, history]);

  return (
    <div className='register'>
      <div className='register__content'>
        <Link to='/'>
          <img className='register__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='register__title'>Добро пожаловать!</h1>
        <Formik
          initialValues={initialvalues}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            onRegister(values);
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
              submitButtonTitle='Зарегистрироваться'
              isValid={isValid}
              dirty={dirty}
              bottomText='Уже зарегистрированы?'
              bottomLink='/signin'
              bottomTitle='Войти'
            >
              <FormField
                title='Имя'
                name='name'
                type='text'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
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

export default Register;
