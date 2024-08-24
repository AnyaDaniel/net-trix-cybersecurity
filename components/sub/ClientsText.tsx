"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Image from "next/image";

const ClientsText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative pt-10">
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-4xl text-white font-mediun mt-[10px] mb-[15px] text-center"
      >
        Our Clients
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Never fret over laying boundries
      </motion.div>
    </div>
  );
};

export default ClientsText;
