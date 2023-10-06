import { useState } from "react";

import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import { Hero } from "./Container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app app__container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
