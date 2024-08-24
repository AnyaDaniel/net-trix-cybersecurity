"use client";
import React from "react";
import HeroContent from "../sub/HeroContent";
import { ParallaxLayer } from "@react-spring/parallax";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <div className="relative flex flex-col h-full w-full">
      {isTablet ? (
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
      ) : (
        <div></div>
      )}
      <HeroContent />
    </div>
  );
};

export default Hero;
