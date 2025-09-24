import BackgroundWithLayout from "../BackgroundWithLayout/BackgroundWithLayout";

function Projects({ setActiveSection }) {
  return (
    <BackgroundWithLayout
      setActiveSection={setActiveSection}
      defaultBackgroundText="PROJECTS"
    >
      <div className="bckgnd-layout__custom-damianLavin">In Progress . . .</div>
    </BackgroundWithLayout>
  );
}

export default Projects;
