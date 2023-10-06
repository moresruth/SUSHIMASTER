import React from "react";
import "./TestimonialCard.scss";
import { images } from "../../constants";
// import { AiFillStar } from "react-icons/ai";

const TestimonialCard = () => {
  return (
    <div className="app__testimonialcard">
      {/* <h1>Testimonial Card</h1> */}
      <div className="app__testimonialcard-profile">
        <img src={images.profile01} alt="profile img" />
        <div className="app__testimonial-profile_info">
          <h3>Emily Rod.</h3>
          {/* <AiFillStar /> */}
          <p>Ratings</p>
        </div>
      </div>

      <div className="app__testimonialcard-comment">
        "I love the sushi product recommendations on SushiMasters. The reviews
        are thorough and saved me a lot of time searching for the right
        products."
      </div>
    </div>
  );
};

export default TestimonialCard;
