import "./NavBar.css";

import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";

function NavBar({ setActiveSection }) {
  const setHandleSection = (value) => {
    return handleActiveSection(value);
  };

  return (
    <div className="navBar">
      <div className="navBar__container">
        <p className="navBar__brackets">{"{"}</p>
        {/* <p className="navBar__text"> Home </p> */}
        <button
          className="navBar__text"
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>
        <p className="navBar__spacer"> | </p>
        {/* <p className="navBar__text"> Projects </p> */}
        <button
          className="navBar__text"
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <p className="navBar__spacer"> | </p>
        {/* <p className="navBar__text"> About Me </p> */}
        <button
          className="navBar__text"
          onClick={() => setActiveSection("aboutMe")}
        >
          About Me
        </button>
        <p className="navBar__brackets">{"}"}</p>
      </div>
    </div>
  );
}

export default NavBar;
