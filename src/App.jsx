import { useState } from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { About, Hero, Testimonial, TodaysMenu } from "./Container";
import Product from "./Container/Product/Product";

function App() {
  return (
    <div className="app app__container">
      <Navbar />
      <Hero />
      <About />
      <TodaysMenu />
      <Product />
      <Testimonial />
    </div>
  );
}

export default App;
