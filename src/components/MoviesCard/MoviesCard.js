import React from "react";
import "./MoviesCard.css";
import img from "../../images/cards/1.jpg";

function MoviesCard({ card }) {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={img} alt='' />
      <div className='movies-card__info'>
        <div className='movies-card__info-top'>
          <h2 className='movies-card__info-title'>{card.title}</h2>
          <div className='movies-card__info-icon'></div>
        </div>
        <p className='movies-card__duration'>{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
