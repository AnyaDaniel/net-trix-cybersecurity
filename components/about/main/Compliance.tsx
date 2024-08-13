"use client";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Compliance = () => {
  return (
    <div className="h-screen">
      <Parallax pages={2}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          className="w-full"
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Compliance;
