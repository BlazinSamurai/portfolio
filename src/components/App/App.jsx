import { useState } from "react";

import "./App.css";

import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <NavBar></NavBar>
      </div>
    </div>
  );
}

export default App;
