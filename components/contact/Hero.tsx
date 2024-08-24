"use client";
import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-screen md:h-screen h-auto pt-20 md:pt-40 pl-40 bg-[url('/contact.jpg')] bg-cover contacthero">
        <h1 className="text-transparent text-3xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
          Contact Us
        </h1>
        <p className="text-white text-lg md:pt-10 pt-2 max-w-[700px]">Ready to protect your business? Get in touch with us to schdule a free consultation and discover how we can secure your digital assets.</p>
      </div>
      
    </div>
  );
};

export default Hero;
