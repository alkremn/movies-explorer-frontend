import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  savedMovies,
  onSearchSubmit,
  onDeleteMovieCard,
  onMoviePopupOpen,
  isErrorOccurred,
  isListEmpty,
}) {
  return (
    <section className='movies'>
      <SearchForm onSearchSubmit={onSearchSubmit} isRequired={false} />
      <MoviesCardList
        movies={savedMovies}
        savedMovies={savedMovies}
        onDeleteMovieCard={onDeleteMovieCard}
        onMoviePopupOpen={onMoviePopupOpen}
        isErrorOccurred={isErrorOccurred}
        isListEmpty={isListEmpty}
      />
    </section>
  );
}

export default SavedMovies;
