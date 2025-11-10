import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";
import Footer from "../Footer/Footer";

import linkedInIcon from "../../images/linkedin-icon.svg";
import githubIcon from "../../images/GitHub_Invertocat_Light.svg";
import emailIcon from "../../images/official-gmail-icon-2020-.svg";

function Links({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="Links"
    >
      <div className="bckgnd-layout__links-container">
        <img
          src={emailIcon}
          alt="Email Icon"
          className="bckgnd-layout__links-icon"
        />
        <div className="bckgnd-layout__links-name">Email: </div>
        <div className="bckgnd-layout__links-anchors">
          damianlavin75@gmail.com
        </div>
      </div>

      <div className="bckgnd-layout__links-container">
        <img
          src={linkedInIcon}
          alt="LinkedIn Icon"
          className="bckgnd-layout__links-icon"
        />
        <div className="bckgnd-layout__links-name">LinkedIn: </div>
        <a
          href="https://linkedin.com/in/damian-lavin-software-engineer"
          target="_blank"
          rel="noopener noreferrer"
          className="bckgnd-layout__links-anchors"
        >
          https://linkedin.com/in/damian-lavin-software-engineer/
        </a>
      </div>

      <div className="bckgnd-layout__links-container">
        <img
          src={githubIcon}
          alt="Github Icon"
          className="bckgnd-layout__links-icon"
        />
        <div className="bckgnd-layout__links-name">GitHub: </div>
        <a
          href="https://github.com/BlazinSamurai"
          target="_blank"
          rel="noopener noreferrer"
          className="bckgnd-layout__links-anchors"
        >
          https://github.com/BlazinSamurai
        </a>
      </div>

      <Footer />
    </BackgroundWithLayout>
  );
}

export default Links;
