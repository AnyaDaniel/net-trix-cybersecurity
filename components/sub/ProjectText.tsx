"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const ProjectText = () => {
  return (
    <div className="flex justify-center items-start md:px-20 px-4 py-20">
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col gap-6 mt-6 mr-10 text-3xl text-white w-full h-auto"
      >
        <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
          Upholding Client Trust:{" "}
        </span>
        The Essence of Data Responsibility
      </motion.div>
      <div className="px-5 w-full">
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-400 my-5"
        >
          Our comprehensive data protection services are designed to help you
          secure your data from unauthorized access, breaches, and other cyber
          threats.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectText;
