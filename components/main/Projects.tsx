

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectText from "../sub/ProjectText";



const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <ProjectText/>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/os.png"
          title="Data Encryption"
          description=" Protecting your data in transit and at rest using advanced encryption techniques."
        />
        <ProjectCard
          src="/folder.png"
          title="Data Backup and Recovery"
          description="Implementing reliable backup solutions to ensure data availability and integrity in case of hardware failures or cyber incidents."
        />
        <ProjectCard
          src="/analyzer.png"
          title="Data Loss Prevention (DLP)"
          description="Identifying and preventing potential data breaches by monitoring and controlling data transfers across your network."
        />
      </div>
    </div>
  );
};

export default Projects;
