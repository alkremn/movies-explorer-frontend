import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ savedMovies, onDeleteMovieCard }) {
  const [isShortMovies, setIsShortMovies] = useState(false);

  function shortMoviesToggleHandler() {
    setIsShortMovies(!isShortMovies);
  }

  return (
    <section className='movies'>
      <SearchForm onShortMoviesToggle={shortMoviesToggleHandler} />
      <MoviesCardList
        movies={savedMovies}
        savedMovies={[]}
        onDeleteMovieCard={onDeleteMovieCard}
      />
    </section>
  );
}

export default SavedMovies;
