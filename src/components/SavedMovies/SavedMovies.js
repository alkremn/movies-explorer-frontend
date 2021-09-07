import React, { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { cardsData } from "../../utils/cardsData";

function SavedMovies() {
  const [movies] = useState(cardsData.slice(1, 4));

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
