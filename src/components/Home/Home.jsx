import "./Home.css";

import homeBackground from "../../images/Home-background.svg";

import NavBar from "../NavBar/NavBar";

function Home() {
  return (
    <div className="home">
      <NavBar></NavBar>
      <div className="home__background-container">
        <img
          src={homeBackground}
          alt="Home Background Image"
          className="home__background-image"
        />
        <p className="home__background-text">HOME</p>
      </div>
      {/* <div className="home__content-container">
        <div className="home__first-line">
          <p className="home__custom-text">Hello, I'm</p>
        </div>
        <div className="home__second-line">
          <p className="home__custom-text">{" <"}</p>
          <span className="home__custom-tag">h1 </span>
          <span className="home__custom-className"> className </span>
          <p className="home__custom-text"> = "</p>
          <span className="home__custom-name">name</span>
          <p className="home__custom-text">"{">"}</p>
        </div>
        <div className="home__third-line">
          <span className="home__custom-damianLavin">Damian Lavin</span>
        </div>
        <div className="home__fourth-line">
          <p className="home__custom-text">{"</"}</p>
          <span className="home__custom-tag">h1</span>
          <p className="home__custome-text">{">"}</p>
        </div>
        <p className="home__custom-text">Welcome to my Portfolio!</p>
      </div> */}
    </div>
  );
}

export default Home;
