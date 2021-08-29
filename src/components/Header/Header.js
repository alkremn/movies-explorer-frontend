import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='logo' />
        <ul className='header__menu'>
          <li className='header__menu-item'>
            <a href='/register' className='header__menu-link'>
              Регистрация
            </a>
          </li>
          <li className='header__menu-item'>
            <a
              href='/login'
              className='header__menu-link header__menu-link-login'
            >
              Войти
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
