import React from "react";
import Interrior from "../Components/Interrior/Interrior";
import CardSlider from "../Components/CardSlider/CardSlider";
import HappyTeam from "../Components/HappyTeam/HappyTeam";
import Clients from "../Components/Clients/Clients";
import HappyClient from "../Components/HappyClient/HappyClient";
import Contact from "../Components/Contact/Contact";
import CardsNew from "../Components/CardsNew/CardsNew";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact") {
      // Kiçik gecikmə ilə scroll etmək daha stabil olur
      setTimeout(() => {
        const section = document.getElementById("contact");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // 100ms gecikmə
    }
  }, [location]);
  return (
    <div>
      <div className="container">
        <Interrior />
        <CardsNew />
        <HappyTeam />
        <Clients />
        <HappyClient />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
