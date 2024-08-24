"use client";

import React from "react";
import SolutionCard from "../sub/SolutionCard";

const Solution = () => {
  return (
    <div className="h-full w-full md:w-[50vw] md:px-10">
      <SolutionCard
        src="/network.png"
        title="Network Security"
        description=" Implementing firewalls, intrusion detection and prevention systems (IDPS), and secure VPNs to protect your network from external threats."
      />
      <SolutionCard
        src="/endpoint.png"
        title="Endpoint Security"
        description=" Ensuring all devices connected to your network are secure with antivirus, anti-malware, and endpoint detection and response (EDR) solutions."
      />
      <SolutionCard
        src="/siemimg.png"
        title="Security Information and Event Management (SIEM)"
        description="Monitoring and analyzing security events in real-time to detect and respond to threats quickly."
      />
      <SolutionCard
        src="/pentest.png"
        title="Vulnerability Assessments and Penetration Testing"
        description=" Identifying weaknesses in your IT environment and providing actionable insights to mitigate risks."
      />
    </div>
  );
};

export default Solution;
