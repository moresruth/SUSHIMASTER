import React from "react";
import "./About.scss";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { images } from "../../constants";

const About = () => {
  return (
    <section id="about" className="app__about  ">
      <div className="app__container">
        <div className="app__wrapper ">
          <SectionTitle title="About Us" subtitle="私たちについて" />
          <div className="app__about-content">
            <div className="app__about-content_item1 ">
              <h1 className="p__playfair app__flex">We Provide Healthy Food</h1>
              <p className="p__poppins app__flex">
                We will continue to provide the experience of Omotenashi, the
                Japanese mindset of hospitality, with our shopping and dining
                for our customer
              </p>
            </div>
            <div className="app__about-content_item2">
              <img src={images.aboutImg} alt="" />
            </div>
            <div className="app__about-content_item3">
              <h1 className="p__playfair app__flex">Our Mission</h1>
              <p className="p__poppins app__flex">
                We will continue to provide the experience of Omotenashi, the
                Japanese mindset of hospitality, with our shopping and dining
                for our customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
