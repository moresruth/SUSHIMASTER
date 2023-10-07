import React from "react";
import "./Testimonial.scss";
import { images } from "../../constants";
import { TestimonialCard } from "../../Components";

const Testimonial = () => {
  return (
    <section className="app__testimonial app__section" id="testimonial">
      <div className="app__testimonial-content app__wrapper">
        <div className="app__testimonial-content_leftside ">
          <h1 className="app__flex">What Our Customers Are Saying</h1>
          <img
            src={images.testimonial}
            alt="testimonial img"
            className="app__flex"
          />
        </div>
        <div className="app__testimonial-item">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
