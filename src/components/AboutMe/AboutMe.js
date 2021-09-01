import React from "react";
import "./AboutMe.css";
import image from "../../images/about.jpg";

function AboutMe() {
  return (
    <section className='about'>
      <h2 className='about__title'>Студент</h2>
      <div className='about__container'>
        <img className='about__image' src={image} alt='about' />
        <div className='about__description-container'>
          <div className='about__text-container'>
            <h3 className='about__name'>Алексей</h3>
            <h3 className='about__occupation'>Фронтенд-разработчик, 38 лет</h3>
            <p className='about__description'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <ul className='about__links'>
            <li className='about__links-item'>
              <a className='about__link' href='https://facebook.com'>
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