import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";

import RandomImg from "../../images/home_page.png";

function Projects({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="PROJECTS"
    >
      <ul className="bckgnd-layout__projects">
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={RandomImg}
              alt="Image of 'Paper Plane' site"
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <h3>Paper Plane:</h3>
            <p>Some Description . . .</p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={RandomImg}
              alt="Image of 'WTWR' site"
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <h3>WTWR</h3>
            <p>Some OTHER Other other description . . . .</p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={RandomImg}
              alt="Image of 'Around the World' site."
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <h3>Around the World</h3>
            <p>Some more descriptions to add . . .</p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={RandomImg}
              alt="Image of a Coffeeshop landing page."
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <h3>CoffeShop</h3>
            <p>More and more descriptions . . . </p>
          </div>
        </li>
      </ul>
    </BackgroundWithLayout>
  );
}

export default Projects;
