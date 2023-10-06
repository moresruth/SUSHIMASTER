import React from "react";
import "./ProductCard.scss";
import { images } from "../../constants";
import { AiOutlineShopping } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="app__productcard ">
      <img src={images.salmontemaki} alt="" />
      <h3 className="p__playfair">Salmon Temaki</h3>
      <span>Nihonryōri</span>
      <p>$456.90</p>

      <ul className="app__flex app__button">
        <li>Buy Now</li>
        <li className="app__button-svg">
          <AiOutlineShopping />
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
