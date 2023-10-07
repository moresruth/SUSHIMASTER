import React from "react";
import "./About.scss";
import { SectionTitle } from "../../Components";
import { images } from "../../constants";

const About = () => {
  return (
    <section className="app__about app__container" id="about">
      <SectionTitle title="About Us" subtitle="私たちについて" />
      <div className="app__about-content app__wrapper">
        <div className="app__about-content_right">
          <p className="p__playfair app__flex">We Provide Healthy Food</p>
          <p className="p__poppins app__flex">
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customer
          </p>
        </div>

        <img src={images.aboutImg} alt="about img" />

        <div className="app__about-content_left">
          <h1 className="p__playfair app__flex">Our Mission</h1>
          <p className="p__poppins app__flex">
            We will continue to provide the experience of Omotenashi, the
            Japanese mindset of hospitality, with our shopping and dining for
            our customer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
