import React, { useEffect, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { throttle } from "../../utils/utils";

function MoviesCardList({
  movies,
  savedMovies,
  onDeleteMovieCard,
  onLikeMovieCard,
  isErrorOccurred,
  isListEmpty,
}) {
  const [filteredMovies, setFilterdMovies] = useState([]);
  const [isMoreButtonActive, setIsMoreButtonActive] = useState(false);
  const [moviesPageCount, setMoviesPageCount] = useState(5);

  useEffect(() => {
    const callback = throttle(() => {
      if (window.outerWidth < 768) {
        setMoviesPageCount(1);
        setFilterdMovies(movies.slice(0, 5));
      } else if (window.outerWidth < 1024) {
        setMoviesPageCount(2);
        setFilterdMovies(movies.slice(0, 8));
      } else {
        setMoviesPageCount(4);
        setFilterdMovies(movies.slice(0, 16));
      }
    }, 1000);

    window.addEventListener("resize", callback);

    callback();

    return () => {
      window.removeEventListener("resize", callback);
    };
  }, [movies, moviesPageCount]);

  useEffect(() => {
    if (filteredMovies.length < movies.length) {
      setIsMoreButtonActive(true);
    } else {
      setIsMoreButtonActive(false);
    }
  }, [movies, filteredMovies]);

  function addMoreMoviesClickHandler() {
    setFilterdMovies(movies.slice(0, filteredMovies.length + moviesPageCount));
  }

  return (
    <div className='card__list-container'>
      {isErrorOccurred ? (
        <p className='movies__list-text'>
          Во время запроса произошла ошибка. <br />
          Возможно, проблема с соединением или сервер недоступен. Подождите
          немного и попробуйте ещё раз
        </p>
      ) : isListEmpty ? (
        <p className='movies__list-text'>Ничего не найдено</p>
      ) : (
        <>
          <ul className='card__list'>
            {filteredMovies.map((card) => (
              <li
                key={onDeleteMovieCard ? card._id : card.id}
                className='card__list-item'
              >
                <MoviesCard
                  card={card}
                  isSavedMovie={savedMovies.some(
                    (savedMove) => savedMove.movieId === card.id
                  )}
                  onDeleteMovieCard={onDeleteMovieCard}
                  onLikeMovieCard={onLikeMovieCard}
                />
              </li>
            ))}
          </ul>
          <button
            className={`card__list-button ${
              isMoreButtonActive ? "card__list-button_active" : ""
            }`}
            onClick={addMoreMoviesClickHandler}
          >
            Ещё
          </button>
        </>
      )}
    </div>
  );
}

export default MoviesCardList;
