import "./BackgroundWithLayout.css";

import homeBackground from "../../images/Home-background.svg";

import NavBar from "../NavBar/NavBar";

function BackgroundWithLayout({ defaultBackgroundText, children }) {
  return (
    <div className="bckgnd-layout">
      <NavBar></NavBar>
      <div className="bckgnd-layout__container">
        <img
          src={homeBackground}
          alt="Background Image"
          className="bckgnd-layout__image"
        />
        <p className="bckgnd-layout__text">{defaultBackgroundText}</p>
      </div>
      <div className="bckgnd-layout__main-content">{children}</div>
    </div>
  );
}

export default BackgroundWithLayout;
