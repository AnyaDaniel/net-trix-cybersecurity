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
            heading="SOC Centers Setup"
            src="/os.png"
            title="Real-Time Threat Monitoring & Response"
            description="We design and deploy scalable Security Operations Centers (SOC) to monitor and respond to cyber threats around the clock. Our expert teams and advanced technology keep your business protected 24/7, ensuring peace of mind."
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#61bdaf]/50 bg-[#61bdaf40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[25vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="SOC Centers Setup"
          src="/os.png"
          title="Real-Time Threat Monitoring & Response"
          description="We design and deploy scalable Security Operations Centers (SOC) to monitor and respond to cyber threats around the clock. Our expert teams and advanced technology keep your business protected 24/7, ensuring peace of mind."
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#61bdaf]/50 bg-[#61bdaf40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={2.5} speed={0.05} className="">
          <PlatformCard
            heading="Firewall Setup & Management"
            src="/management.png"
            title="Customized Firewall Solutions for Maximum Protection"
            description="Our firewall services provide the essential first line of defense against cyberattacks. We tailor each firewall setup to suit your organization's infrastructure, ensuring comprehensive protection against unauthorized access and breaches."
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#b82c54]/50 bg-[#b82c5440] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[62vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="Firewall Setup & Management"
          src="/management.png"
          title="Customized Firewall Solutions for Maximum Protection"
          description="Our firewall services provide the essential first line of defense against cyberattacks. We tailor each firewall setup to suit your organization's infrastructure, ensuring comprehensive protection against unauthorized access and breaches."
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#b82c54]/50 bg-[#b82c5440] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={3.4} speed={0.1} className="">
          <PlatformCard
            heading="Penetration Testing"
            src="/analyzing.png"
            title="Simulate Real-World Attacks, Identify Vulnerabilities"
            description="Identify weaknesses in your system before malicious actors do. Our penetration testing services simulate real-world attacks to evaluate your defenses, helping you address vulnerabilities and strengthen your security posture."
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#1469ff]/50 bg-[#1469ff40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[52vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="Penetration Testing"
          src="/analyzing.png"
          title="Simulate Real-World Attacks, Identify Vulnerabilities"
          description="Identify weaknesses in your system before malicious actors do. Our penetration testing services simulate real-world attacks to evaluate your defenses, helping you address vulnerabilities and strengthen your security posture."
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#1469ff]/50 bg-[#1469ff40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
      {isTablet ? (
        <ParallaxLayer offset={3} speed={0.75} className="">
          <PlatformCard
            heading="Security Audits & Compliance"
            src="/client.png"
            title="Achieve Compliance and Secure Your Business"
            description="Ensure your business meets all industry standards and regulatory requirements with our thorough security audits. We help you identify gaps, improve security protocols, and achieve compliance with the latest cybersecurity laws and standards."
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[5vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="Security Audits & Compliance"
          src="/client.png"
          title="Achieve Compliance and Secure Your Business"
          description="Ensure your business meets all industry standards and regulatory requirements with our thorough security audits. We help you identify gaps, improve security protocols, and achieve compliance with the latest cybersecurity laws and standards."
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
       {isTablet ? (
        <ParallaxLayer offset={3.8} speed={0.95} className="">
          <PlatformCard
            heading="Cybersecurity Training"
            src="/client.png"
            title="Equip Your Team with Essential Cyber Skills"
            description="Empower your team with the knowledge and tools to prevent and respond to threats. Our cybersecurity training programs provide comprehensive education, helping your workforce recognize and address potential risks in real-time."
            cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full md:my-10 h-[50vh] md:w-[30.6vw] md:ml-[5vw] flex flex-col justify-center"
          />
        </ParallaxLayer>
      ) : (
        <PlatformCard
          heading="Cybersecurity Training"
          src="/client.png"
          title="Equip Your Team with Essential Cyber Skills"
          description="Empower your team with the knowledge and tools to prevent and respond to threats. Our cybersecurity training programs provide comprehensive education, helping your workforce recognize and address potential risks in real-time."
          cls="overflow-hidden rounded-lg shadow-lg shadow-[#d43d8a]/50 bg-[#d43d8a40] backdrop-blur-md w-full my-2 h-auto p-4 flex flex-col justify-center"
        />
      )}
    </div>
  );
};

export default PlatformParallax;
