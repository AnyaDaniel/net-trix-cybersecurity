"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";

const PartnerText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative pt-10">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-4xl text-white font-mediun mt-[10px] mb-[15px] text-center"
      >
        Our Partners
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Stand confident
      </motion.div>
    </div>
  );
};

export default PartnerText;
