import React from "react";
import "./Hero.scss";

import { images } from "../../constants";

const Hero = () => {
  return (
    <section className="app__hero app__container" id="home">
      <div className="app__hero-content  ">
        <div className="app__hero-content_info">
          <h1 className="bold-text">
            Enjoy Delicious <br />
            Japanesse Food
          </h1>
          <p className="p__poppins">
            Enjoy a good dinner wih the best dishes in the market. Feel the
            taste of the most popular Japanese food from anywhere and anytime
          </p>
          <a href="#about" className="app__button">
            Learn More
          </a>
        </div>
        <div className="app__hero-content_img">
          <img src={images.heroImg} alt="sushi hero " />
        </div>
        <div className="app__hero-content_bg">
          <img src={images.japtext} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
