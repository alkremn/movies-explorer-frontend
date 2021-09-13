import React from "react";
import "./MoviesCard.css";
import { moviesBaseUrl } from "../../utils/constants";

function MoviesCard({
  card,
  isSavedMovie,
  onDeleteMovieCard,
  onLikeMovieCard,
  onMoviePopupOpen,
}) {
  return (
    <div
      className='movies-card'
      onClick={(e) =>
        onMoviePopupOpen(e, card, onDeleteMovieCard ? true : false)
      }
    >
      <img
        className='movies-card__image'
        src={
          onDeleteMovieCard
            ? card.thumbnail
            : `${moviesBaseUrl}${card.image.formats.thumbnail.url}`
        }
        alt={card.nameRU}
      />
      <div className='movies-card__info'>
        <div className='movies-card__info-top'>
          <h2 className='movies-card__info-title'>{card.nameRU}</h2>
          {onDeleteMovieCard ? (
            <button
              className='movies-card__delete-button'
              onClick={() => onDeleteMovieCard(card._id)}
            ></button>
          ) : (
            <button
              className={`movies-card__like-button ${
                isSavedMovie ? "movies-card__info-icon-active" : ""
              }`}
              onClick={() => onLikeMovieCard(card)}
            />
          )}
        </div>
        <p className='movies-card__duration'>{card.duration}</p>
      </div>
    </div>
  );
}

export default MoviesCard;
