"use client";
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import {
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaLocationDot,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="w-screen h-screen pt-40 pl-40 bg-[url('/contact.jpg')] bg-cover">
        <h1 className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
          Contact Us
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
