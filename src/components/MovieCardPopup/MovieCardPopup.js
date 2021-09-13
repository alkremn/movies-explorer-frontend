import React from "react";
import "./MovieCardPopup.css";
import { moviesBaseUrl } from "../../utils/constants";
import { formatDuration } from "../../utils/utils";

function MovieCardPopup({ isOpen, movieCard, isSaved, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        />
        <h2 className='popup__title'>{movieCard?.nameRU}</h2>
        <ul className='popup__info-list'>
          <li className='popup__info-list_item'>
            <p>{movieCard?.year}</p>
          </li>
          <li className='popup__info-list_item'>
            <p>{movieCard && formatDuration(movieCard.duration)}</p>
          </li>
          <li className='popup__info-list_item'>
            <p>{movieCard?.country}</p>
          </li>
        </ul>
        <img
          className='popup__image'
          src={
            isSaved
              ? movieCard?.image
              : `${moviesBaseUrl}${movieCard?.image.formats.thumbnail.url}`
          }
          alt={movieCard?.nameRU}
        />
        <p className='popup__director'>
          Режиссёр{" "}
          <span className='popup__director-name'>{movieCard?.director}</span>
        </p>
        <p className='popup__description'>{movieCard?.description}</p>
        <a
          className='popup__link'
          href={isSaved ? movieCard?.trailer : movieCard?.trailerLink}
          rel='noreferrer'
          target='_blank'
        >
          Посмотреть трейлер
        </a>
      </div>
    </div>
  );
}

export default MovieCardPopup;
