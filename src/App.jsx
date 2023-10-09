import { useState } from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { About, Footer, Hero, Testimonial, TodaysMenu } from "./Container";
import Product from "./Container/Product/Product";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <TodaysMenu />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
