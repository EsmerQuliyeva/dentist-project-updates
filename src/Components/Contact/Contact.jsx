import React from "react";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-detail-left">
        <button className="about-btn">Bizimlə əlaqə</button>
        <h1>
          Əlavə suallarınız var? Bizimlə əlaqə saxlayın – sizin üçün buradayıq!
        </h1>
        <p>
          Gülümsəməniz üçün ilk addımı bu gün atın – bizə zəng edin və ya yazın.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <BsFillTelephoneFill className="telephone-icon-contact" />
            <a href="tel:012 564 47 65" className="footer-link">
              012 564 47 65
            </a>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="message-icon" />
            <a href="mailto:contact@dentalic.com" className="footer-link">
              contact@dentalic.com
            </a>
          </div>
        </div>
      </div>
      <div className="contact-detail-right" data-aos="fade-up-left">
        <div className="input-group">
          <div className="input-part">
            <label>Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-part">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="input-group">
          <div className="input-part">
            <label>Phone Number</label>
            <input type="number" placeholder="(123) 465-98-67" />
          </div>
          <div className="input-part">
            <label>Service</label>
            <input type="text" placeholder="Ex:Dental Implant" />
          </div>
        </div>
        <div className="full-width">
          <label>Message</label>
          <textarea placeholder="Please describe what service you are describe in"></textarea>
        </div>
        <div className="full-width">
          <button
            className="book-btn"
            style={{ width: "auto", maxWidth: "200px", margin: "o auto" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
