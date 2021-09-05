import React, { useRef } from "react";
import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
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
      {!loggedIn && <Header />}
      <Promo onButtonClick={() => buttonClickHandler(sectionRef.current)} />
      <AboutProject sectionRef={sectionRef} />
      <Techs />
      <AboutMe />
      <Portfolio />
      {!loggedIn && <Footer />}
    </div>
  );
}

export default Main;
