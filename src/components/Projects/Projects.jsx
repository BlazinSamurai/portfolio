import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";
import Footer from "../Footer/Footer";

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
            <h3 className="bckgnd-layout__project-title">Paper Plane:</h3>
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
            <h3 className="bckgnd-layout__project-title">
              "What to Wear"{"(WTWR)"}
            </h3>
            <p>
              A site to help the user decide what to wear depending on the
              temperature in their location. Feature include: Adding/removing
              clothes, liking items, categorizing items and changing between
              Fahrenheit to Celsius.
            </p>
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
            <h3 className="bckgnd-layout__project-title">Around the US</h3>
            <p>
              ‘Social media app’ to display: a user's profile picture, a bio
              with information about the user and a body of pictures of places
              the user has been.{" "}
            </p>
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
            <h3 className="bckgnd-layout__project-title">CoffeShop</h3>
            <p>
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
