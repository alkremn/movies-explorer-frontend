import React from "react";
import "./Profile.css";

function Profile({ loggedIn }) {
  return (
    <section className='profile'>
      <div className='profile__container'>
        <div className='profile__form'>
          <h2 className='profile__form-title'>Привет, Алексей!</h2>
          <p className='profile__form-field'>
            Имя <span>Алексей Кремнев</span>
          </p>
          <p className='profile__form-field'>
            E-mail <span>alkremn@gmail.com</span>
          </p>
        </div>
        <div className='profile__buttom'>
          <button className='profile__buttom-button'>Редактировать</button>
          <button className='profile__buttom-button profile__buttom-button-logout'>
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
