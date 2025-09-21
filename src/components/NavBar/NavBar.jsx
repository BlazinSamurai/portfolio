// get an error when this is uncommented ???
// import Link from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__container">
        <p className="navBar__brackets">{"{"}</p>
        <p className="navBar__text"> Home </p>
        <p className="navBar__spacer"> | </p>
        <p className="navBar__text"> Projects </p>
        <p className="navBar__spacer"> | </p>
        <p className="navBar__text"> About Me </p>
        <p className="navBar__brackets">{"}"}</p>
      </div>
    </div>
  );
}

export default NavBar;
