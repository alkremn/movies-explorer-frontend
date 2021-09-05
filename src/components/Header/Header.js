import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ loggedIn }) {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [menuActive]);

  function handleMenuButtonClick(e) {
    setMenuActive(!menuActive);
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        <div
          className={`header__hidden-menu ${
            menuActive ? "header__hidden-menu_active" : ""
          }`}
        >
          <ul>
            <li>
              <a className='header__menu-link' href>
                Главная
              </a>
            </li>
            <li>
              <a className='header__menu-link' href>
                Фильмы
              </a>
            </li>
            <li>
              <a className='header__menu-link' href>
                Сохранённые фильмы
              </a>
            </li>
          </ul>
          <a href=''>
            <span></span>Аккаунт
          </a>
        </div>

        {loggedIn ? (
          <button
            className={`header__hamburger-menu ${
              menuActive ? "header__hamburger-menu_active" : ""
            }`}
            onClick={handleMenuButtonClick}
          >
            <div />
            <div />
            <div />
          </button>
        ) : (
          <ul className='header__menu'>
            <li className='header__menu-item'>
              <Link to='/signup' className='header__menu-link'>
                Регистрация
              </Link>
            </li>
            <li className='header__menu-item'>
              <Link
                to='/signin'
                className='header__menu-link header__menu-link-login'
              >
                Войти
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
