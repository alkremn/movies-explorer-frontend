import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, onDeleteMovieCard }) {
  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={card.url} alt='' />
      <div className='movies-card__info'>
        <div className='movies-card__info-top'>
          <h2 className='movies-card__info-title'>{card.title}</h2>
          {onDeleteMovieCard ? (
            <button
              className='movies-card__delete-button'
              onClick={() => onDeleteMovieCard(card.id)}
            ></button>
          ) : (
            <div
              className={`movies-card__info-icon ${
                card.isShortFilm ? "movies-card__info-icon-active" : ""
              }`}
            ></div>
          )}
        </div>
        <p className='movies-card__duration'>{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
