import React, { useRef } from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Main({ loggedIn }) {
  const sectionRef = useRef(null);
  function scrollTo(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  function buttonClickHandler(element) {
    scrollTo(element);
  }

  return (
    <div className='main'>
      <Header color='#073042' />
      <Promo onButtonClick={() => buttonClickHandler(sectionRef.current)} />
      <AboutProject sectionRef={sectionRef} />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Main;
