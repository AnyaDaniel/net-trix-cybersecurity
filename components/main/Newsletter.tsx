import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="w-screen px-5 md:px-32 py-4 flex flex-col md:flex-row justify-center items-center bg-[#0e0830]">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl text-white">
          Subscribe to our <br />
          <span className="text-transparent bg-clip-text text-5xl bg-gradient-to-r from-purple-500 to-cyan-500">
            NEWSLETTER
          </span>
        </h1>
      </div>
      <div className="w-full md:w-1/3">
        <motion.a
          variants={slideInFromLeft(0)}
          className="py-2 mt-2 md:mt-0 md:py-3 px-20 button-primary text-center text-white text-xl cursor-pointer rounded-lg flex items-center justify-center"
          style={{ textDecoration: "none" }}
          href="/contact"
        >
          Subscribe <FaArrowRight className="ml-2 text-xl"/>
        </motion.a>
      </div>
    </div>
  );
};

export default Newsletter;
