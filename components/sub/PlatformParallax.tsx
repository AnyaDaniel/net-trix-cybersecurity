"use client";

import React from "react";
import PlatformCard from "./PlatformCard";
import { useMediaQuery } from "react-responsive";
import { ParallaxLayer } from "@react-spring/parallax";

const PlatformParallax = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <div>
      {isTablet ? (
        <ParallaxLayer offset={2} speed={0.3} className="">
          <PlatformCard
            heading="ONE OPERATING SYSTEM"
            src="/os.png"
            title="FortiOS"
            description="Network & cloud firewalls, SD-WAN, WLAN/LAN, single-vendor SASE"
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#61bdaf]/50 bg-[#61bdaf40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[25vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="ONE OPERATING SYSTEM"
          src="/os.png"
          title="FortiOS"
          description="Network & cloud firewalls, SD-WAN, WLAN/LAN, single-vendor SASE"
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#61bdaf]/50 bg-[#61bdaf40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={2.5} speed={0.05} className="">
          <PlatformCard
            heading="ONE MANAGEMENT PLANE"
            src="/management.png"
            title="FortiManagement"
            description="Single-soource managemnet and control for endpoints, network, and cloud"
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#b82c54]/50 bg-[#b82c5440] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[62vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="ONE MANAGEMENT PLANE"
          src="/management.png"
          title="FortiManagement"
          description="Single-soource managemnet and control for endpoints, network, and cloud"
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#b82c54]/50 bg-[#b82c5440] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={3.4} speed={0.1} className="">
          <PlatformCard
            heading="ONE ANALYTICS ENGINE"
            src="/analyzing.png"
            title="FortiAnalyzer"
            description="Unified data lake for consistent security operations"
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#1469ff]/50 bg-[#1469ff40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[52vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="ONE ANALYTICS ENGINE"
          src="/analyzing.png"
          title="FortiAnalyzer"
          description="Unified data lake for consistent security operations"
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#1469ff]/50 bg-[#1469ff40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={3} speed={0.75} className="">
          <PlatformCard
            heading="UNIFIED ENDPOINT AGENT"
            src="/client.png"
            title="FortiClient"
            description="Comprehensive endpoint protections, including EPP, EDR, SASE, and ZTNA"
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[5vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="UNIFIED ENDPOINT AGENT"
          src="/client.png"
          title="FortiClient"
          description="Comprehensive endpoint protections, including EPP, EDR, SASE, and ZTNA"
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
    </div>
  );
};

export default PlatformParallax;
