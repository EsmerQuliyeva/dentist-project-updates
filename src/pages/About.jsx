import React, { useEffect, useLayoutEffect } from "react";
import DentalClinic from "../Components/DentalClinic/DentalClinic";
import AboutTeam from "../Components/AboutTeam/AboutTeam";
import AboutCard from "../Components/AboutCard/AboutCard";
import Doctors from "../Components/Doctors/Doctors";
import { useLocation } from "react-router-dom";

const About = () => {
  const projectsLocation = useLocation();
  useEffect(() => {
    if (projectsLocation.hash === "#projects") {
      // Gecikmə vacibdir ki, komponentlər yüklənsin
      setTimeout(() => {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [projectsLocation]);
  return (
    <div className="container">
      <DentalClinic />
      <AboutTeam />
      <AboutCard />
      <Doctors />
    </div>
  );
};

export default About;
