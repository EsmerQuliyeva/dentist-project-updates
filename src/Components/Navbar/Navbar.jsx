import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
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
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  return (
    <div className="nav-general-container">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          {/* <Link to="/" className="link-logo">
            <h2>OralEase</h2>
          </Link> */}
        </div>
        <nav className={`nav-links-container ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link selected" : "nav-link"
            }
          >
            Services
          </NavLink>
        </nav>
        <div className="nav-btns">
          <button className="telephone">
            <BsFillTelephoneFill className="telephone-icon" />
            <a href="tel:012 564 47 65" className="footer-link">
              012 564 47 65
            </a>
          </button>
          <button className="book-btn" onClick={() => handleClick("contact")}>
            Qəbul üçün yazılın
          </button>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
      </div>
    </div>
  );
};

export default Navbar;
