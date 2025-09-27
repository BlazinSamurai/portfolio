import "./BackgroundWithLayout.css";

import homeBackground from "../../images/Home-background.svg";

import NavBar from "../NavBar/NavBar";

function BackgroundWithLayout({
  setActiveSection,
  defaultBackgroundText,
  children,
}) {
  return (
    <div className="bckgnd-layout">
      <NavBar setActiveSection={setActiveSection} />
      <div className="bckgnd-layout__container">
        <img
          src={homeBackground}
          alt="Background Image"
          className="bckgnd-layout__image"
        />
        <p
          className={
            `${defaultBackgroundText === "ABOUT ME"}`
              ? "bckgnd-layout__text bckgnd-layout__text-about"
              : "bckgnd-layout__text"
          }
        >
          {defaultBackgroundText}
        </p>
      </div>
      <div className="bckgnd-layout__main-content">{children}</div>
    </div>
  );
}

export default BackgroundWithLayout;
