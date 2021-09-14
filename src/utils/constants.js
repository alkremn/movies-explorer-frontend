import * as yup from "yup";

export const mainUrl = "https://api.akrem.movies-explorer.nomoredomains.rocks";
export const moviesBaseUrl = "https://api.nomoreparties.co";
export const testCreds = {
  email: "alexk@zyto.com",
  password: "ALALALAasdf",
  name: "Alexey Kremenv",
};

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required("Обязательное Поле"),
  email: yup
    .string()
    .email("Введите валидный имеил")
    .required("Обязательное Поле"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Обязательное Поле"),
});

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введите валидный имеил")
    .required("Обязательное Поле"),
  password: yup
    .string()
    .min(8, "Минимум 8 символов")
    .required("Обязательное Поле"),
});
export const profileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Минимум 2 символов")
    .max(30, "Максимум 30 символов")
    .required("Обязательное Поле"),
  email: yup
    .string()
    .email("Введите валидный имеил")
    .required("Обязательное Поле"),
});
