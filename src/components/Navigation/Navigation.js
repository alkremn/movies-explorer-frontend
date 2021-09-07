import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isActive, onClose }) {
  function closeNavigationHandler() {
    onClose();
  }

  return (
    <div className={`navigation ${isActive ? "navigation_visable" : ""}`}>
      <button
        className={`header__hamburger-menu header__hamburger-menu_open ${
          isActive ? "header__hamburger-menu_active" : ""
        }`}
        onClick={closeNavigationHandler}
      >
        <div />
        <div />
        <div />
      </button>
      <ul className='navigation__links'>
        <li className='navigation__links-item mavigation__links-item_main'>
          <NavLink
            className='navigation__link'
            exact
            to='/'
            activeClassName='navigation__link-active'
            onClick={closeNavigationHandler}
          >
            Главная
          </NavLink>
        </li>
        <li className='navigation__links-item'>
          <NavLink
            className='navigation__link'
            to='/movies'
            activeClassName='navigation__link-active'
            onClick={closeNavigationHandler}
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__links-item'>
          <NavLink
            className='navigation__link'
            to='/saved-movies'
            activeClassName='navigation__link-active'
            onClick={closeNavigationHandler}
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <NavLink
        className='navigation__profile-link'
        activeClassName='navigation__link-active'
        to='/profile'
        onClick={closeNavigationHandler}
      >
        Аккаунт
      </NavLink>
    </div>
  );
}

export default Navigation;
