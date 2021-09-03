import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { cardsData } from "../../utils/cardsData";

function MoviesCardList() {
  return (
    <div className='card__list-container'>
      <ul className='card__list'>
        {cardsData.map((card) => (
          <li className='card__list-item'>
            <MoviesCard card={card} />
          </li>
        ))}
      </ul>
      <button className='card__list-button'>Ещё</button>
    </div>
  );
}

export default MoviesCardList;
