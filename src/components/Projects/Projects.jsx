import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";
import Footer from "../Footer/Footer";

import paperPlaneSS from "../../images/projectImg/landing_top.png";
import WTWR from "../../images/projectImg/wtwr_home_page.png";
import aroundUs from "../../images/projectImg/around_us_page.png";
import coffeeShop from "../../images/projectImg/CoffeeShop.png";

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
              src={paperPlaneSS}
              alt="Image of 'Paper Plane' site"
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <a
              href="https://paperplane.csproject.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bckgnd-layout__project-text bckgnd-layout__project-anchors"
            >
              Paper Plane
            </a>
            <p className="bckgnd-layout__project-text">
              A application to help the individual travelers take their plans
              from text to takeoff!
            </p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={WTWR}
              alt="Image of 'WTWR' site"
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <h3 className="bckgnd-layout__project-text">
              "What to Wear"{"(WTWR)"}
            </h3>
            <p className="bckgnd-layout__project-text">
              A digital closet application where a user can sort through their
              clothing cards depending on what the temperature is.
            </p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={aroundUs}
              alt="Image of 'Around the World' site."
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <a
              href="https://blazinsamurai.github.io/se_project_aroundtheus/"
              target="_blank"
              rel="noopener noreferrer"
              className="bckgnd-layout__project-text bckgnd-layout__project-anchors"
            >
              Around the US
            </a>
            <p className="bckgnd-layout__project-text">
              A social media app that allows a user to post pictures of their
              travels. This dynamic app allows the user to various features to
              customize their page to how they see fit.
            </p>
          </div>
        </li>
        <li className="bckgnd-layout__project">
          <div className="bckgnd-layout__project-img-cont">
            <img
              src={coffeeShop}
              alt="Image of a Coffeeshop landing page."
              className="bckgnd-layout__project-img"
            />
          </div>
          <div className="bckgnd-layout__project-content">
            <a
              href="https://blazinsamurai.github.io/se_project_coffeeshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bckgnd-layout__project-text bckgnd-layout__project-anchors"
            >
              CoffeeShop
            </a>
            <p className="bckgnd-layout__project-text">
              Landing page for a potential coffeeshop. Features include:
              navigation, two YouTube recipe videos, book a table section, and a
              contact section with information about the coffee shop.
            </p>
          </div>
        </li>
        <Footer />
      </ul>
    </BackgroundWithLayout>
  );
}

export default Projects;
