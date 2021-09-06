import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className='footer__buttom'>
        <ul className='footer__links'>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://practicum.yandex.ru/'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://github.com/alkremn'>
              Github
            </a>
          </li>
          <li className='footer__links-item'>
            <a className='footer__link' href='https://facebook.com'>
              Facebook
            </a>
          </li>
        </ul>
        <p className='footer__copyright'>&copy;2020</p>
      </div>
    </footer>
  );
}

export default Footer;
