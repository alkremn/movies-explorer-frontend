import React, { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearchSubmit, isRequired }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isShortMovie, setIsShortMovie] = useState(false);

  function searchSubmitHandler(e) {
    e.preventDefault();
    if (isRequired) {
      if (searchTerm.length > 0) {
        onSearchSubmit(searchTerm, isShortMovie);
      }
    } else {
      onSearchSubmit(searchTerm, isShortMovie);
    }
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
          onShortMoviesToggle={() => setIsShortMovie(!isShortMovie)}
        />
      </div>
    </form>
  );
}

export default SearchForm;
