"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const SolutionText = () => {
  return (
    <div className="flex flex-col justify-center items-start md:flex-row md:px-20 px-4 py-20 relative">
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col gap-6 mt-6 mr-10 text-5xl text-white w-full h-auto"
      >
        Cybersecurity
        <span className="text-transparent bg-clip-text text-6xl tracking-[1rem] bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
          {" "}Solution
        </span>
        
      </motion.div>
      <div className="px-5 w-full">
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-400 my-5 pb-7"
        >
          Cybersecurity threats are ever-evolving, and so are our solutions. We provide
          a range of services to keep your IT infrastructure secure.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default SolutionText;
