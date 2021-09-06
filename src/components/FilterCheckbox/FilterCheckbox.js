import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ onShortMoviesToggle }) {
  return (
    <label className='checkbox'>
      <input
        className='checkbox__input'
        type='checkbox'
        onClick={onShortMoviesToggle}
      />
      <span className='checkbox__slider'></span>
    </label>
  );
}

export default FilterCheckbox;
