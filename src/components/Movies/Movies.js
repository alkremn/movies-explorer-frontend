import React, { useState } from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ movies, savedMovies, onLikeMovieCard, onMoviePopupOpen }) {
  const [isShortMovies, setIsShortMovies] = useState(false);

  function shortMoviesToggleHandler() {
    setIsShortMovies(!isShortMovies);
  }

  return (
    <section className='movies'>
      <SearchForm onShortMoviesToggle={shortMoviesToggleHandler} />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onLikeMovieCard={onLikeMovieCard}
        onMoviePopupOpen={onMoviePopupOpen}
      />
    </section>
  );
}

export default Movies;
