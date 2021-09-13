import React from "react";
import "./Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  movies,
  savedMovies,
  onLikeMovieCard,
  onMoviePopupOpen,
  onSearchSubmit,
  isErrorOccurred,
  isListEmpty,
}) {
  return (
    <section className='movies'>
      <SearchForm onSearchSubmit={onSearchSubmit} isRequired={true} />
      <MoviesCardList
        movies={movies}
        savedMovies={savedMovies}
        onLikeMovieCard={onLikeMovieCard}
        onMoviePopupOpen={onMoviePopupOpen}
        isErrorOccurred={isErrorOccurred}
        isListEmpty={isListEmpty}
      />
    </section>
  );
}

export default Movies;
