import React from "react";
import "./AboutMe.css";
import image from "../../images/about.jpg";

function AboutMe() {
  return (
    <section className='about'>
      <h2 className='about__title'>Студент</h2>
      <div className='about__container'>
        <img className='about__image' src={image} alt='автор' />
        <div className='about__description-container'>
          <div className='about__text-container'>
            <h3 className='about__name'>Алексей</h3>
            <h3 className='about__occupation'>Фронтенд-разработчик, 38 лет</h3>
            <p className='about__description'>
              Родом из Санкт Петербурга, живу и работаю сейчас в США. Закончил
              Western Governors University по направлению Computer Science.
              Женат, есть маленькая дочка. Увлекаюсь спортзалом, теннисом,
              веб-разработкой и программированием на С++.
            </p>
          </div>
          <ul className='about__links'>
            <li className='about__links-item'>
              <a
                className='about__link'
                href='https://www.facebook.com/alexey.kremnev.12'
              >
                Facebook
              </a>
            </li>
            <li className='about__links-item'>
              <a className='about__link' href='https://github.com/alkremn'>
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
