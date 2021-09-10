import React from "react";
import "./AboutProject.css";

function AboutProject({ sectionRef }) {
  return (
    <section className='aboutProject' ref={sectionRef}>
      <h2 className='aboutProject__title'>О проекте</h2>
      <div className='aboutProject__info'>
        <div className='aboutProject__info-section'>
          <h3 className='aboutProject__subtitle'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='aboutProject__description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='aboutProject__info-section'>
          <h3 className='aboutProject__subtitle'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='aboutProject__description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='aboutProject__table'>
        <div className='aboutProject__cell'>
          <p className='aboutProject__cell-top aboutProject__cell-top_green'>
            1 неделя
          </p>
          <p className='aboutProject__cell-bottom'>Back-end</p>
        </div>
        <div className='aboutProject__cell'>
          <p className='aboutProject__cell-top'>4 недели</p>
          <p className='aboutProject__cell-bottom'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
