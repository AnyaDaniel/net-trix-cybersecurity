'use client'

import React from "react";
import FlipCard from "../sub/FlipCard";

const Trust = () => {
  return (
    <div>
      <div className="py-10 md:py-40 bg-[url('/trustbg.jpg')] bg-cover">
        <div className="px-10 md:px-32 text-center">
          <h1 className="text-3xl md:text-6xl bold text-white mb-10">
            Largest Organizations Around the World Trust Fortinet
          </h1>
          <p className="text-lg text-gray-200">
            As a leading vendor in the cyberesecurity industry, Fortinet secures
            the largest enterprises, service providers, and government
            organizations around the world
          </p>
        </div>
        <div className="flex flex-col justify-between items-center md:flex-row p-10 gap-3">
          <FlipCard
            backQuote={true}
            backBody="As a global US-based company, we are a leader in enterprise-classss cybersecurity and networking innovation, securing over 700,000 enterprises, service providers, and government organizations worldwide."
            title="Trusted Company"
            blur={"6px"}
            bgColor="#61bdaf80"
          ></FlipCard>
          <FlipCard
            backQuote={true}
            backBody="Our commitment to the highest security assurance standards means our products are designed with security at the forefront of the product development lifecycle to meet or exceed key global standards."
            title="Trusted Products"
            blur={"6px"}
            bgColor="#b82c5480"
          ></FlipCard>
          <FlipCard
            backQuote={false}
            backBody="We are heavily focused on maintaining complaint, sustainable processes that meetor exceed international guidelines and are in line with customer expectations."
            title="Trusted Processes"
            blur={"6px"}
            bgColor="#1469ff70"
          ></FlipCard>
          <FlipCard
            backQuote={true}
            backBody="We actively collaborate with public sector agencies, trade associations, law enforcement organizations, and academia to proactively exchange threat information and enhance cyber resilience globally."
            title="Trusted Partners"
            blur={"6px"}
            bgColor="#d43d8a80"
          ></FlipCard>
        </div>
      </div>
    </div>
  );
};

export default Trust;
