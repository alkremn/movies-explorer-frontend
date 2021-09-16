import * as yup from "yup";

export const mainUrl = "https://api.akrem.movies-explorer.nomoredomains.rocks";
export const moviesBaseUrl = "https://api.nomoreparties.co";
export const serverErrorMessage = `Во время запроса произошла ошибка. 
                                    Возможно, проблема с соединением
                                    или сервер недоступен. Подождите 
                                    немного и попробуйте ещё раз`;

export const notFoundMessage = "Ничего не найдено";
export const TABLET_WIDTH = 768;
export const DESKTOP_WIDTH = 1024;
export const MIN_MOVIE_COUNT = 5;
export const MID_MOVIE_COUNT = 8;
export const BIG_MOVIE_COUNT = 16;
export const UPDATE_SUCCESS_MESSAGE = "Данные профиля обновлены";

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
