'use client'
import React from "react";
import HeroContent from "../sub/HeroContent";
import { ParallaxLayer } from "@react-spring/parallax";


const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <ParallaxLayer speed={0.05}>
          <video
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-300px] left-0 z-[1] w-full object-cover"
          >
            <source src="/blackhole.webm" type="video/webm" />
          </video>
        </ParallaxLayer>
      <HeroContent />
    </div>
  );
};

export default Hero;
