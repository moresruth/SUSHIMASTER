import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import images from "../../constants/images";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar app__container">
      <div className="app__navbar-logo">
        <img src={images.Brand} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about us", "popular", "testimonial"].map((item) => (
          <li className=" p__poppins" key={`link-${item}`}>
            <div />
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
              {["home", "about", "work", "skills", "contact"].map((item) => (
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
    </nav>
  );
};

export default Navbar;

// src/Navbar.js
// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbar ${isOpen ? "active" : ""}`}>
//       <div className="navbar-brand">
//         <a href="/">Logo</a>
//       </div>
//       <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a href="/about">About</a>
//           </li>
//           <li className="nav-item">
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//       <button className="navbar-toggle" onClick={toggleNavbar}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
