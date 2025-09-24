import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";

function AboutMe({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="ABOUT ME"
    >
      <div className="bckgnd-layout__custom-damianLavin">Loading . . .</div>
    </BackgroundWithLayout>
  );
}

export default AboutMe;
