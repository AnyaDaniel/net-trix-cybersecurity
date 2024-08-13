"use client";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HeroVideoParallax = () => {
  return (
    <>
      <Parallax pages={2}>
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
      </Parallax>
    </>
  );
};

export default HeroVideoParallax;
