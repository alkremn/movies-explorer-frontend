import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, color }) {
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuButtonClick(e) {
    setMenuActive(!menuActive);
  }

  function closeMenuHandler() {
    setMenuActive(false);
  }

  return (
    <header className='header' style={{ backgroundColor: color }}>
      <div className='header__container'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        {loggedIn ? (
          <>
            <Navigation
              isActive={menuActive}
              loggedIn={loggedIn}
              onClose={closeMenuHandler}
            />
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
          </>
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
