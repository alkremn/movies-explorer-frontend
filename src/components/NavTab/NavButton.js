import React from "react";
import "./NavButton.css";

function NavButton({ onButtonClick }) {
  return (
    <button className='navButton' onClick={onButtonClick}>
      Узнать больше
    </button>
  );
}

export default NavButton;
