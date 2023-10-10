import React from "react";
import "./Footer.scss";
import { FooterCard, Newsletter } from "../../Components";

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-content ">
        <Newsletter />
        <FooterCard />
      </div>
      <p className="p__poppins app__flex">Designed By: Ruth Mores | 2023</p>
    </footer>
  );
};

export default Footer;
