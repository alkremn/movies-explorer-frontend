import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isShortMovie, setIsShortMovie] = useState(false);

  function searchSubmitHandler(e) {
    e.preventDefault();
    onSearchSubmit(searchTerm, isShortMovie);
  }

  function handleShortMovieToggle() {
    setIsShortMovie(!isShortMovie);
    onSearchSubmit(searchTerm, !isShortMovie);
  }

  return (
    <form className='searchForm' onSubmit={searchSubmitHandler}>
      <div className='searchForm__input-container'>
        <input
          className='searchForm__input'
          type='text'
          placeholder='Фильм'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='searchForm__submit' type='submit'>
          Найти
        </button>
      </div>
      <div className='searchForm__slider-container'>
        <span className='searchForm__slider-text'>Короткометражки</span>
        <FilterCheckbox
          className='searchForm__slider'
          onShortMoviesToggle={handleShortMovieToggle}
        />
      </div>
    </form>
  );
}

export default SearchForm;
