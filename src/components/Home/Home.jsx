import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";
import Footer from "../Footer/Footer";

function Home({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="Home"
    >
      <div className="bckgnd-layout__first-line">
        <p className="bckgnd-layout__custom-text">Hello, I'm</p>
      </div>
      <div className="bckgnd-layout__second-line">
        <p className="bckgnd-layout__custom-text">{" <"}</p>
        <span className="bckgnd-layout__custom-tag">h1 </span>
        <span className="bckgnd-layout__custom-className"> className </span>
        <p className="bckgnd-layout__custom-text"> = "</p>
        <span className="bckgnd-layout__custom-name">name</span>
        <p className="bckgnd-layout__custom-text">"{">"}</p>
      </div>
      <div className="bckgnd-layout__third-line">
        <h1 className="bckgnd-layout__custom-damianLavin">Damian Lavin</h1>
      </div>
      <div className="bckgnd-layout__fourth-line">
        <p className="bckgnd-layout__custom-text">{"</"}</p>
        <span className="bckgnd-layout__custom-tag">h1</span>
        <p className="bckgnd-layout__custom-text">{">"}</p>
      </div>
      <p className="bckgnd-layout__custom-text">Welcome to my Portfolio!</p>
      <Footer />
    </BackgroundWithLayout>
  );
}

export default Home;
