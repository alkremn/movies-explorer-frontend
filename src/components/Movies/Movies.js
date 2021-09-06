import React, { useState } from "react";
import { cardsData } from "../../utils/cardsData";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ loggedIn }) {
  const [movies, setMovies] = useState(cardsData);
  const [isShortMovies, setIsShortMovies] = useState(false);

  function shortMoviesToggleHandler() {
    setIsShortMovies(!isShortMovies);
  }

  return (
    <section className='movies'>
      <Header loggedIn='true' />
      <SearchForm onShortMoviesToggle={shortMoviesToggleHandler} />
      <MoviesCardList movies={movies} isShortMovies={isShortMovies} />
      <Footer />
    </section>
  );
}

export default Movies;
