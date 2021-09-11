import React from "react";
import "./MoviesCard.css";
import { moviesFetchUrl } from "../../utils/constants";

function MoviesCard({ card, onDeleteMovieCard }) {
  return (
    <div className='movies-card'>
      <img
        className='movies-card__image'
        src={`${moviesFetchUrl}${card.image.url}`}
        alt={card.nameRU}
      />
      <div className='movies-card__info'>
        <div className='movies-card__info-top'>
          <h2 className='movies-card__info-title'>{card.nameRU}</h2>
          {onDeleteMovieCard ? (
            <button
              className='movies-card__delete-button'
              onClick={() => onDeleteMovieCard(card.id)}
            ></button>
          ) : (
            <button
              className={`movies-card__like-button ${
                card.isShortFilm ? "movies-card__info-icon-active" : ""
              }`}
            ></button>
          )}
        </div>
        <p className='movies-card__duration'>{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
