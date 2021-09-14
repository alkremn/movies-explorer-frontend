import React, { useContext } from "react";
import "./Profile.css";
import { getFirstName } from "../../utils/utils";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onEditProfilePopupOpen, onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className='profile'>
      <div className='profile__container'>
        <div className='profile__form'>
          <h2 className='profile__form-title'>
            {`Привет, ${
              currentUser ? getFirstName(currentUser.name) : "пользоватеть"
            }!`}
          </h2>
          <p className='profile__form-field'>
            Имя <span>{currentUser?.name}</span>
          </p>
          <p className='profile__form-field'>
            E-mail <span>{currentUser?.email}</span>
          </p>
        </div>
        <div className='profile__buttom'>
          <button
            className='profile__buttom-button'
            onClick={() => onEditProfilePopupOpen()}
          >
            Редактировать
          </button>
          <button
            className='profile__buttom-button profile__buttom-button-logout'
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
