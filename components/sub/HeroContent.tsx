'use client'

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[4px] flex border boder-[#7042f88b] w-max"
        >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="welcome-text text-[13px]">Net-Trix Cyber Security</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
