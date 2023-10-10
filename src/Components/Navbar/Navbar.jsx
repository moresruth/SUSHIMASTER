import React, { useState } from "react";
import "./Navbar.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar ">
      <div className="app__navbar-content ">
        <a href="#home" className="app__logo">
          SUSHIMASTER
        </a>
        <ul className="app__navbar-links">
          {["home", "about", "products", "testimonial"].map((item) => (
            <li className=" p__poppins" key={`link-${item}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <button href="#login" className=" app__button">
            Subscribe
          </button>
        </ul>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#000"
            fontSize={20}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay">
              <AiOutlineCloseSquare
                fontSize={27}
                className="overlay__close"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__navbar-smallscreen_links">
                {["home", "about", "products", "testimonial"].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggleMenu(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
