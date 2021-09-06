import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { cardsData } from "../../utils/cardsData";

function SavedMovies() {
  const [movies, setMovies] = useState(cardsData.slice(1, 4));
  return (
    <section className='movies'>
      <Header loggedIn='true' />
      <SearchForm />
      <MoviesCardList movies={movies} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
