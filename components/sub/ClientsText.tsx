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
    <div className="w-full h-auto flex flex-col items-center justify-center relative">
      <div className="flex items-center justify-center py-3 lg:opacity-0">
        <Image
          src="/clients.png"
          alt="clients"
          width={150}
          height={150}
          className=""
        />
      </div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-mediun mt-[10px] mb-[15px] text-center"
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
