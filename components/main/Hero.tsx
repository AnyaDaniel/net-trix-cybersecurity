import React from "react";
import HeroContent from "../sub/HeroContent";
import HeroVideoParallax from "../sub/HeroVideoParallax";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <HeroVideoParallax/>
      <HeroContent />
    </div>
  );
};

export default Hero;
