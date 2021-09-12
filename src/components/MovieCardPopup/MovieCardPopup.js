import React from "react";
import "./MovieCardPopup.css";

function MovieCardPopup({ isOpen, movieCard, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className='popup__container'>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClose}
        />
        <h2 className='popup__title'>«Роллинг Стоунз» в изгнании</h2>
        <div className='popup__info'>
          <p>2004</p>
          <p>1ч42м</p>
          <p>США</p>
        </div>
        <iframe
          title='trailer'
          height='350px'
          width='100%'
          src='https://www.youtube.com/embed/UXcqcdYABFw'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
        ></iframe>
        <p>
          Режиссёр <span>Стивен Кайак</span>
        </p>
        <p>
          "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты
          и сверхуспешные концертные туры, была разорена. Виной всему —
          бездарный менеджмент и драконовское налогообложение в Британии. Тогда
          музыканты приняли не самое простое для себя решение: летом 1971 года
          после выхода альбома «Stiсky Fingers» они отправились на юг Франции
          записывать новую пластинку. Именно там, на Лазурном Берегу, в
          арендованном Китом Ричардсом подвале виллы Неллькот родился сборник
          «Exile on Main St.», который стал лучшим альбомом легендарной группы.
        </p>
      </div>
    </div>
  );
}

export default MovieCardPopup;
