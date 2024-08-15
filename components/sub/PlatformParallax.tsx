"use client";

import React from "react";
import PlatformCard from "./PlatformCard";
import { ParallaxLayer } from "@react-spring/parallax";

const PlatformParallax = () => {
  return (
    <div>
      <ParallaxLayer offset={2} speed={0.3} className="">
            <PlatformCard
            heading="ONE OPERATING SYSTEM"
              src="/client.png"
              title="FortiOS"
              description="Network & cloud firewalls, SD-WAN, WLAN/LAN, single-vendor SASE"
              cls="overflow-hidden rounded-lg shadow-lg shadow-[#61bdaf]/50 bg-[#61bdaf40] backdrop-blur-md border border-[#61bdaf] w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[25vw]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2.5} speed={.05} className="">
            <PlatformCard
              heading="ONE MANAGEMENT PLANE"
              src="/folder.png"
              title="FortiManagement"
              description="Single-soource managemnet and control for endpoints, network, and cloud"
              cls="overflow-hidden rounded-lg shadow-lg shadow-[#b82c54]/50 bg-[#b82c5440] backdrop-blur-md border border-[#b82c54] w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[62vw]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3.4} speed={.1} className="">
            <PlatformCard
            heading="ONE ANALYTICS ENGINE"
              src="/analyzer.png"
              title="FortiAnalyzer"
              description="Unified data lake for consistent security operations"
              cls="overflow-hidden rounded-lg shadow-lg shadow-[#1469ff]/50 bg-[#1469ff40] backdrop-blur-md border border-[#1469ff] w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[52vw]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.75} className="">
            <PlatformCard
            heading="UNIFIED ENDPOINT AGENT"
              src="/analyzer.png"
              title="FortiClient"
              description="Comprehensive endpoint protections, including EPP, EDR, SASE, and ZTNA"
              cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md border border-[#d43d8a] w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[5vw]"
            />
          </ParallaxLayer>
    </div>
  );
};

export default PlatformParallax;
