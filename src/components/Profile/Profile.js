import React from "react";
import "./Profile.css";
import { getFirstName } from "../../utils/utils";

function Profile({ user, onLogout }) {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <div className='profile__form'>
          <h2 className='profile__form-title'>
            Привет, {user ? getFirstName(user.name) : "пользоватеть"}!
          </h2>
          <p className='profile__form-field'>
            Имя <span>{user?.name}</span>
          </p>
          <p className='profile__form-field'>
            E-mail <span>{user.email}</span>
          </p>
        </div>
        <div className='profile__buttom'>
          <button className='profile__buttom-button'>Редактировать</button>
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
