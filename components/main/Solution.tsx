"use client";

import React from "react";
import SolutionCard from "../sub/SolutionCard";
import SolutionText from "../sub/SolutionText";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

interface Props {
  num: string;
}

const Solution = ({num}: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[10] h-screen"
      id="projects"
    >
      <Parallax pages={2.5}>
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 2.5 }}>
          <SolutionText num={num} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.102} factor={2.2}>
          <div className="h-full w-[50vw] px-10">
            <SolutionCard
              src="/os.png"
              title="Network Security"
              description=" Implementing firewalls, intrusion detection and prevention systems (IDPS), and secure VPNs to protect your network from external threats."
            />
            <SolutionCard
              src="/folder.png"
              title="Endpoint Security"
              description=" Ensuring all devices connected to your network are secure with antivirus, anti-malware, and endpoint detection and response (EDR) solutions."
            />
            <SolutionCard
              src="/analyzer.png"
              title="Security Information and Event Management (SIEM)"
              description="Monitoring and analyzing security events in real-time to detect and respond to threats quickly."
            />
            <SolutionCard
              src="/analyzer.png"
              title="Vulnerability Assessments and Penetration Testing"
              description=" Identifying weaknesses in your IT environment and providing actionable insights to mitigate risks."
            />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Solution;
