"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { ParallaxLayer } from "@react-spring/parallax";

const ProjectText = () => {
  return (
    <ParallaxLayer offset={1} style={{zIndex: 5}}>
      <div className="flex flex-col justify-center items-start md:flex-row md:px-20 px-4 py-20">
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col gap-6 mt-6 mr-10 text-5xl text-white w-full"
      >
        Data Protection and
        <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
          {" "}CyberSecurity
        </span>
        
      </motion.div>
      <div className="px-5 w-full">
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-400 my-5 pb-7"
        >
          Our comprehensive data protection services are designed to help you
          secure your data from unauthorized access, breaches, and other cyber
          threats.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="/about#services"
        >
          Learn More
        </motion.a>
      </div>
      </div>
    </ParallaxLayer>
  );
};

export default ProjectText;
