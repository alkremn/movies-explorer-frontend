import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cardsData } from "../../utils/cardsData";

function MoviesCardList() {
  return (
    <ul className='card__list'>
      {cardsData.map((card) => (
        <li className='card__list-item'>
          <MoviesCard card={card} />
        </li>
      ))}
    </ul>
  );
}

export default MoviesCardList;
