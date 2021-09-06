import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { cardsData } from "../../utils/cardsData";

function SavedMovies() {
  const [movies, setMovies] = useState(cardsData.slice(1, 4));

  function movieCardDeleteHandler(cardId) {
    console.log(cardId);
  }

  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList
        movies={movies}
        onDeleteMovieCard={movieCardDeleteHandler}
      />
    </section>
  );
}

export default SavedMovies;
