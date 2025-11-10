import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";
import Footer from "../Footer/Footer";

function AboutMe({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="ABOUT ME"
    >
      <span className="bckgnd-layout__custom-blue">
        {"{"}
        <span className="bckgnd-layout__custom-neon">{"/*"}</span>
      </span>
      <h2 className="bckgnd-layout__about-damian">Damian Lavin</h2>
      <p className="bckgnd-layout__titles">
        FE-Dev | JS-Dev | BE-Dev | React-Dev | Full Stack Dev | Software
        Engineer
      </p>
      <span className="bckgnd-layout__custom-blue">
        <span className="bckgnd-layout__custom-neon">{"*/"}</span>
        {"}"}
      </span>
      <div className="bckgnd-layout__education">
        <div className="bckgnd-layout__custom-neon">Education:</div>
        <p className="bckgnd-layout__custom-text">
          TripleTen - Software Engineering Certificate
        </p>
        <p className="bckgnd-layout__custom-text">Aug. 2023 - Aug. 2025</p>
      </div>
      <div className="bckgnd-layout__skills">
        <div className="bckgnd-layout__custom-neon">
          Languages & Frameworks:
        </div>
        <p className="bckgnd-layout__custom-text">
          HTML5 | CSS3 | React | Node.js | Webpack | REST APIs, Babel
        </p>
        <div className="bckgnd-layout__custom-neon">TOOLS & PLATFORMS:</div>
        <p className="bckgnd-layout__custom-text">
          Git | GitHub | Figma | Google Cloud | MongoDB
        </p>
        <div className="bckgnd-layout__custom-neon">WORKFLOW:</div>
        <p className="bckgnd-layout__custom-text">
          UI/UX principles | Object-Oriented Programming | Debugging
        </p>
        <div className="bckgnd-layout__custom-neon">SOFTSKILLS:</div>
        <p className="bckgnd-layout__custom-text">
          Leadership |Communication | Problem-Solving strategies | Attention to
          detail | Time efficiency | Adaptable
        </p>
      </div>
      <div className="bckgnd-layout__columns">
        <div className="bckgnd-layout__jobs">
          <div className="bckgnd-layout__experience">
            <div className="bckgnd-layout__custom-neon">Experience:</div>
            <div className="bckgnd-layout__custom-blue">
              Freelance Developer
            </div>
            <div className="bckgnd-layout__custom-text bckgnd-layout__custom-mobile-text">
              September 2024 - Current
            </div>
            <div className="bckgnd-layout__custom-blue">
              Back-end Developer
              <span className="bckgnd-layout__custom-text bckgnd-layout__custom-mobile-text">
                {" "}
                - Partner Pipeline
              </span>
            </div>
            <div className="bckgnd-layout__custom-text bckgnd-layout__custom-mobile-text">
              Internship
            </div>
            <div className="bckgnd-layout__custom-text bckgnd-layout__custom-mobile-text">
              July 2025 - August 2025
            </div>
          </div>

          <div className="bckgnd-layout__prevRoles">
            <div className="bckgnd-layout__custom-neon">Previous Roles:</div>
            <div className="bckgnd-layout__custom-blue">
              Delievery Driver{" "}
              <span className="bckgnd-layout__custom-text">
                {" "}
                - Amazon/Linked Logistics
              </span>
            </div>
            <div className="bckgnd-layout__custom-text">
              Seasonal Employment
            </div>
            <div className="bckgnd-layout__custom-text">
              October 2024 - May 2025
            </div>

            <div className="bckgnd-layout__custom-blue">
              USDA Inspector{" "}
              <span className="bckgnd-layout__custom-text"> - C.A.S.S</span>
            </div>
            <div className="bckgnd-layout__custom-text">
              Seasonal Employment
            </div>
            <div className="bckgnd-layout__custom-text">
              August 2023 - December 2023
            </div>

            <div className="bckgnd-layout__custom-blue">
              Assistant Manager{" "}
              <span className="bckgnd-layout__custom-text">
                {" "}
                - Gates Resale
              </span>
            </div>
            <div className="bckgnd-layout__custom-text">
              {" "}
              September 2017 - August 2023
            </div>
          </div>
        </div>

        <div className="bckgnd-layout__aboutMe">
          <div className="bckgnd-layout__custom-neon">About Me:</div>
          <p className="bckgnd-layout__custom-text bckgnd-layout__about-me-mobile">
            Software Engineer with transferable skill to be used in building
            responsive and secure websites. Utilizing attention to detail in
            HTML, CSS, JavaScript, and modern development tools like Git and
            Figma. Proven ability to deliver interactive user-centric designs
            and efficient code through multistage problem-solving strategies.
          </p>
        </div>
      </div>
      <Footer />
    </BackgroundWithLayout>
  );
}

export default AboutMe;
