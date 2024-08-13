"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const ProjectParallax = () => {

  return (
    <div className="w-full h-[20vw]">
      <Parallax pages={2} className="z-[10] md:flex-row gap-10">
        <ParallaxLayer
          sticky={{ start: 0.2, end: 2 }}
          className="w-full "
        >
          <ProjectCard
            src="/os.png"
            title="Data Encryption"
            description=" Protecting your data in transit and at rest using advanced encryption techniques."
            cls='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[2vw]'
          />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.6, end: 2 }} className="w-full">
          <ProjectCard
            src="/folder.png"
            title="Data Backup and Recovery"
            description="Implementing reliable backup solutions to ensure data availability and integrity in case of hardware failures or cyber incidents."
            cls='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[34.6vw]'
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 1, end: 2 }} className="w-full"
        >
          <ProjectCard
            src="/analyzer.png"
            title="Data Loss Prevention (DLP)"
            description="Identifying and preventing potential data breaches by monitoring and controlling data transfers across your network."
            cls='overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[67.2vw]'
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ProjectParallax;
