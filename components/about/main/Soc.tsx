'use client'

import React from "react";
import FlipCard from "../sub/FlipCard";

const Soc = () => {
  return (
    <div>
      <div className="py-40 bg-[url('/trustbg.jpg')] bg-cover">
        <div className="px-32 text-center">
        <h1 className="text-6xl font-thin mb-3 text-gray-400">05.</h1>
          <h1 className="text-6xl bold text-white mb-5">
            SECURITY OPERATIONS CENTER
          </h1>
          <p className="text-lg text-gray-400">
            We envision a digital world where businesses can operate securely
            and efficiently, free from the constant threat of cyber-attacks. Our
            goal is to be the leading provider of SOC services, recognized for
            our innovation, expertise, and commitment to client security.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center md:flex-row p-20 gap-3">
          <FlipCard
            backQuote={true}
            listone="Comprehensive assessment of organizational needs"
            listtwo="Custom SOC architecture design"
            listthree="Implementation of cutting-edge security technologies"
            listfour="Integration with existing IT infrastructure"
            title="SOC Design and Implementation"
            blur={"6px"}
            bgColor="#61bdaf80"
          ></FlipCard>
          <FlipCard
            backQuote={true}
            listone="Continuous real-time monitoring of network activities"
            listtwo="Rapid identification and analysis of security incidents"
            listthree="Immediate incident response and containment strategies"
            listfour="Post-incident forensics and reporting"
            title="24/7 Monitoring and Incident Response"
            blur={"6px"}
            bgColor="#b82c5480"
          ></FlipCard>
          <FlipCard
            backQuote={false}
            listone="Collection and analysis of threat data from multiple sources"
            listtwo="Proactive threat hunting and vulnerability assessments"
            listthree="Advanced threat modeling and simulation exercises"
            title="Threat Intelligence and Analysis"
            blur={"6px"}
            bgColor="#1469ff70"
          ></FlipCard>
        </div>
      </div>
    </div>
  );
};

export default Soc;
