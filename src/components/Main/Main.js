import React, { useRef } from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  const sectionRef = useRef(null);
  function scrollTo(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  function buttonClickHandler(element) {
    scrollTo(element);
  }

  return (
    <section className='main'>
      <Promo onButtonClick={() => buttonClickHandler(sectionRef.current)} />
      <AboutProject sectionRef={sectionRef} />
      <Techs />
      <AboutMe />
      <Portfolio />
    </section>
  );
}

export default Main;
