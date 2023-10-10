import React from "react";
import "./Newsletter.scss";
import { images } from "../../constants";
import { LiaTelegramPlane } from "react-icons/lia";

const Newsletter = () => {
  return (
    <div className="app__newsletter" id="newsletter">
      <div className="app__wrapper">
        <div className="app__newsletter-content app__flex">
          <img
            src={images.newsletter01}
            alt="newsletter_img"
            className="newsletter_img-1"
          />
          <div className="app__newsletter-content_data ">
            <div className="app__flex ">
              <h2 className="p__playfair">Subscribe To Our Newsletter</h2>
              <p className="p__poppins ">
                Get Offers Straight to Your Inbox And Never Miss Our Latest
                Updates
              </p>
            </div>

            <form action="" className="app__newsletter__form">
              <input
                type="email"
                placeholder="Enter email"
                className="app__newsletter__input"
              />

              <ul className="app__flex app__button">
                <li>Subscribe</li>
                <li className="app__button-svg">
                  <LiaTelegramPlane />
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
    </div>
  );
};

export default Newsletter;
