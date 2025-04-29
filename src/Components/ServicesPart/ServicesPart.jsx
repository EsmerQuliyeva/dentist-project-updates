import React from "react";
import { Link } from "react-router-dom";
import firstphoto from "../../assets/hygiene-dentist.svg";
import secondPhoto from "../../assets/ortho-dentistt.svg";
import { useLocation, useNavigate } from "react-router-dom";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import "./ServicesPart.css";
const cards = [
  { name: "Cosmetic", image: firstphoto },
  { name: "Oral Hygiene", image: secondPhoto },
  { name: "Dental Implant", image: firstphoto },
  { name: "Surgery", image: firstphoto },
  { name: "Cosmetic", image: secondPhoto },
  { name: "Dentist", image: firstphoto },
];

const ServicesPart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#contact");
    }
  };
  return (
    <div className="service-cards-container">
      <BackgroundCircles />
      <h1>Our Services</h1>
      <div className="service-cards-intro">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          rerum recusandae voluptatem sequi sapiente<br></br>Lorem ipsum dolor
          sit amet consectetur, adipisicing elit.
        </p>
        <button
          className="book-btn-service-cards"
          id="service-cards-book-btn"
          onClick={handleClick}
        >
          Qəbul üçün yazılın
        </button>
      </div>
      <div className="service-cards">
        {cards.map((card, index) => (
          <div className="services_card" key={index} data-aos="fade-up">
            <div className="service-card-image">
              <img
                src={card.image}
                className="service-card-img"
                alt={card.name}
              />
            </div>
            <div className="services_card-content">
              <h2 className="name">{card.name}</h2>
              <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                expedita aliquam, aut quia eum nihil.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPart;
