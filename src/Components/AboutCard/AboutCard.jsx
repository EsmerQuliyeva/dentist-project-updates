import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiServiceLine } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { GiShakingHands } from "react-icons/gi";
import BackgroundCircles from "../BackgroundCircles/BackgroundCircles";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./AboutCard.css";
const AboutCard = () => {
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
    <div className="about-cards-container">
      <BackgroundCircles />
      <button className="about-btn about-page-btn">Values</button>
      <h1>The core values that drive everything what we do</h1>
      <div className="about-cards">
        <div className="about-card" data-aos="zoom-out-up">
          <div className="about-card-img">
            <VscWorkspaceTrusted className="about-card-icon" />
          </div>
          <div className="about-card-part-descp">
            <h4>Trust</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card" data-aos="zoom-out-up">
          <div className="about-card-img">
            <RiServiceLine className="about-card-icon" />
          </div>
          <div>
            <h4>Care&Service</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card" data-aos="zoom-out-up">
          <div className="about-card-img">
            <FaMedal className="about-card-icon" />
          </div>
          <div>
            <h4>Responsibility</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
        <div className="about-card" data-aos="zoom-out-up">
          <div className="about-card-img">
            <GiShakingHands className="about-card-icon" />
          </div>
          <div>
            <h4>Commitment</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              similique voluptate dolore nulla sunt.
            </p>
          </div>
        </div>
      </div>
      <div className="interrior-dentist-site-description-btns">
        <button className="book-btn" onClick={handleClick}>
          Qəbul üçün yazılın
        </button>
        <Link
          to="/services"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="services-btn">Xidmətlərimizə baxın</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutCard;
