import { useState } from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { About, Hero, TodaysMenu } from "./Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app app__container">
      <Navbar />
      <Hero />
      <About />
      <TodaysMenu />
    </div>
  );
}

export default App;
