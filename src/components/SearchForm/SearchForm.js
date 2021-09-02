import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <form className='searchForm'>
      <div className='searchForm__input-container'>
        <input className='searchForm__input' type='text' placeholder='Фильм' />
        <button className='searchForm__submit' type='submit'>
          Найти
        </button>
      </div>
      <div className='searchForm__slider-container'>
        <span className='searchForm__slider-text'>Короткометражки</span>
        <FilterCheckbox className='searchForm__slider' />
      </div>
    </form>
  );
}

export default SearchForm;
