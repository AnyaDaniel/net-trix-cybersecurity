import React from "react";
import ProjectText from "../sub/ProjectText";
import ProjectParallax from "../sub/ProjectParallax";
import { FaAngleDown } from "react-icons/fa";

const Projects = () => {
  return (
    <div   
      className=""
    >
      <div className="flex-col items-center hidden lg:flex bg-gradient-to-t from-transparent to-[#1f293779] w-full">
        <p className="text-lg mt-4 text-transparent">Scroll</p>
        <FaAngleDown className="text-xl text-transparent" />
      </div>
      <ProjectText />

      <ProjectParallax />
    </div>
  );
};

export default Projects;
