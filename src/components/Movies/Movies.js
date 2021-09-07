import React, { useState } from "react";
import "./Movies.css";
import { cardsData } from "../../utils/cardsData";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ loggedIn }) {
  const [movies] = useState(cardsData);
  const [isShortMovies, setIsShortMovies] = useState(false);

  function shortMoviesToggleHandler() {
    setIsShortMovies(!isShortMovies);
  }

  return (
    <section className='movies'>
      <SearchForm onShortMoviesToggle={shortMoviesToggleHandler} />
      <MoviesCardList movies={movies} isShortMovies={isShortMovies} />
    </section>
  );
}

export default Movies;
