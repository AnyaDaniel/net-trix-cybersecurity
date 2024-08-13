

import React from "react";
import ProjectText from "../sub/ProjectText";
import ProjectParallax from "../sub/ProjectParallax";



const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[10]"
      id="projects"
    >
      <ProjectText/>

      <ProjectParallax />
    </div>
  );
};

export default Projects;
