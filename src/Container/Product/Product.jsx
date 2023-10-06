import React from "react";
import "./Product.scss";
import { ProductCard, SectionTitle } from "../../Components";

const Product = () => {
  return (
    <section className="app__product app__section">
      <div className="app__product-content app__container">
        <SectionTitle title="Popular Dishes" subtitle="人気の料理" />
        <div className="app__product-content_item app__flex ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="app__flex">
          <button className=" app__button-v2">Show More</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
