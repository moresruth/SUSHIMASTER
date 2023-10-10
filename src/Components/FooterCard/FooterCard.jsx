import React from "react";
import "./FooterCard.scss";
import { FaFacebook, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa6";

const FooterCard = () => {
  return (
    <div className="app__footercard">
      <div className="app__footercard-content">
        <a href="#home" className="app__logo">
          {" "}
          SUSHIMASTER
        </a>
        <ul className="app__footercard-links app__flex">
          {["home", "about", "products", "testimonial"].map((item) => (
            <li className="p__poppins" key={`link${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <ul className="app__footercard-socials app__flex">
          <li className="app__flex">
            <a href="#home" className="app__flex">
              <FaFacebook />
            </a>
          </li>
          <li className="app__flex">
            <a href="#home" className="app__flex">
              <FaTwitter />
            </a>
          </li>
          <li className="app__flex">
            <a href="#home" className="app__flex">
              <FaDiscord />
            </a>
          </li>
          <li className="app__flex">
            <a href="#home" className="app__flex">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCard;
