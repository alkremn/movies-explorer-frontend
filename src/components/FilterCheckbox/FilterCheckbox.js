import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className='checkbox'>
      <input className='checkbox__input' type='checkbox' />
      <span className='checkbox__slider'></span>
    </label>
  );
}

export default FilterCheckbox;
