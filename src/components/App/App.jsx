import { useState } from "react";

import "./App.css";

import neonSquares from "../../images/Neon-squares.svg";
import whiteSquares from "../../images/White-squares.svg";
import lightBlueSquares from "../../images/LightBlue-squares.svg";

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
        <div className="page__squares">
          <img src={lightBlueSquares} alt="" className="page__lightBlue" />
          <img src={whiteSquares} alt="" className="page__white" />
          <img src={neonSquares} alt="" className="page__neon" />
        </div>

        {renderSection()}
      </div>
    </div>
  );
}

export default App;
