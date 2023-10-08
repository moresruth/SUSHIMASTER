import React from "react";
import "./Newsletter.scss";
import { images } from "../../constants";
import { LiaTelegramPlane } from "react-icons/lia";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-content">
        <img
          src={images.newsletter01}
          alt="newsletter_img"
          className="newsletter_img-1"
        />
        <div className="app__newsletter-content_data ">
          <h2 className="p__playfair app__flex">Subscribe To Our Newsletter</h2>
          <p className="p__poppins app__flex">
            Get Offers Straight to Your Inbox And Never Miss Our Latest Updates
          </p>

          <form action="" className="app__newsletter__form">
            <input
              type="email"
              placeholder="Enter email"
              className="app__newsletter__input"
            />

            <ul className="app__flex app__button">
              <li>Subscribe</li>
              <li className="app__button-svg">
                <LiaTelegramPlane fontSize={27} />
              </li>
            </ul>
          </form>
        </div>
        <img
          src={images.newsletter02}
          alt="newsletter_img"
          className="newsletter_img-2"
        />
      </div>
    </div>
  );
};

export default Newsletter;
