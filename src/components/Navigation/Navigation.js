import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation({ isActive, onMenuClick }) {
  return (
    <div className={`navigation ${isActive ? "navigation_visable" : ""}`}>
      <ul className='navigation__links'>
        <li className='navigation__links-item mavigation__links-item_main'>
          <NavLink
            className='navigation__link'
            exact
            to='/'
            activeClassName='navigation__link-active'
          >
            Главная
          </NavLink>
        </li>
        <li className='navigation__links-item'>
          <NavLink
            className='navigation__link'
            to='/movies'
            activeClassName='navigation__link-active'
          >
            Фильмы
          </NavLink>
        </li>
        <li className='navigation__links-item'>
          <NavLink
            className='navigation__link'
            to='/saved-movies'
            activeClassName='navigation__link-active'
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
      <NavLink
        className='navigation__profile-link'
        activeClassName='navigation__link-active'
        to='/profile'
      >
        Аккаунт
      </NavLink>
    </div>
  );
}

export default Navigation;
