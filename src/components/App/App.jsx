import { useState } from "react";

import "./App.css";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Home></Home>
        {/* <Projects></Projects> */}
        {/* <AboutMe></AboutMe> */}
      </div>
    </div>
  );
}

export default App;
