import "./NavBar.css";

function NavBar({ setActiveSection }) {
  return (
    <div className="navBar">
      <div className="navBar__container">
        <p className="navBar__brackets">{"{"}</p>
        <button
          className="navBar__text navBar__text-ends"
          onClick={() => setActiveSection("home")}
        >
          Home
        </button>
        <p className="navBar__spacer"> | </p>
        <button
          className="navBar__text navBar__text-projects"
          onClick={() => setActiveSection("projects")}
        >
          Projects
        </button>
        <p className="navBar__spacer"> | </p>
        <button
          className="navBar__text navBar__text-ends"
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
