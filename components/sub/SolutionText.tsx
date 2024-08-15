"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

interface Props {
  num: string;
}

const SolutionText = ({num}: Props) => {
  return (
    <div
      className="w-full md:w-[50vw] h-screen flex flex-col items-center justify-center px-20 py-20 md:left-[70%!important] md:ml-[70%!important] md:float-right "
    >
      <h1 className="text-6xl font-thin mb-2 text-right">{num}</h1>
      <motion.div
        variants={slideInFromTop}
        className="flex flex-col gap-6 my-6 mr-10 text-5xl text-right text-white w-full h-auto"
      >
        Cybersecurity
        <span className="text-transparent bg-clip-text text-6xl tracking-[0.7rem] bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[-20px]">
          {" "}
          Solution
        </span>
      </motion.div>
      <div className="flex flex-col items-end">
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl text-right text-gray-400 my-5 pb-7 "
        >
          Cybersecurity threats are ever-evolving, and so are our solutions. We
          provide a range of services to keep your IT infrastructure secure.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" style={{ textDecoration: "none" }}
        >
          Learn More
        </motion.a>
      </div>
    </div>
  );
};

export default SolutionText;
