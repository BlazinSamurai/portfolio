import React, { useState } from "react";

import "./App.css";

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
      <div className="page__content">{renderSection()}</div>
    </div>
  );
}

export default App;
