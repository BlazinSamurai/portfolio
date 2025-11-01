import { useState } from "react";

import "./App.css";

import neonSquares from "../../images/squares/Neon-square.svg";
import whiteSquares from "../../images/squares/White-square.svg";
import lightBlueSquares from "../../images/squares/LightBlue-square.svg";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "projects":
        return <Projects setActiveSection={setActiveSection} />;
      case "aboutMe":
        return <AboutMe setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="page">
      <div className="page__content">
        {renderSection()}

        <div className="page__squares">
          <img src={lightBlueSquares} alt="" className="page__lightBlue" />
          <img src={whiteSquares} alt="" className="page__white" />
          <img src={neonSquares} alt="" className="page__neon" />
        </div>
      </div>
    </div>
  );
}

export default App;
