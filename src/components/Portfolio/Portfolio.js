import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__links-item'>
          <a
            className='portfolio__link'
            href='https://alkremn.github.io/russian-travel/index.html'
          >
            Статичный сайт<div className='portfolio__arrow-icon'></div>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a
            className='portfolio__link'
            href='https://alkremn.github.io/russian-travel/index.html'
          >
            Адаптивный сайт<div className='portfolio__arrow-icon'></div>
          </a>
        </li>
        <li className='portfolio__links-item'>
          <a
            className='portfolio__link'
            href='https://akremn.students.nomoredomains.club'
          >
            Одностраничное приложение
            <div className='portfolio__arrow-icon'></div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
