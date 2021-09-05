import React from "react";
import "./Promo.css";
import promo from "../../images/promo.svg";
import NavTab from "../NavTab/NavButton";

function Promo({ onButtonClick }) {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__content'>
          <img className='promo__image' src={promo} alt='promo' />
          <div className='promo__text'>
            <h1 className='promo__title'>
              Учебный проект студента факультета{" "}
              <span className='promo__title-web'>Веб-разработки</span>.
            </h1>
            <p className='promo__subtitle'>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
        </div>
        <NavTab onButtonClick={onButtonClick} />
      </div>
    </section>
  );
}

export default Promo;
