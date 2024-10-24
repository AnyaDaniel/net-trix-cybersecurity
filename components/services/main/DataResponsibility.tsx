import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

const DataResponsibility = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-between items-start px-4 md:px-16 pt-5 mb:pt-0"
    >
      <div className="w-[30%] hidden md:block">
        <div className="w-[100px] h-[150vh] bg-gradient-to-b from-cyan-500 to-purple-500"></div>
      </div>
      <div className="px-2 md:px-20 md:w-[70%] md:pt-60">
          <div className="text-gray-400 text-5xl text-center mb:pb-20">
            <h1 className="">
              Upholding Client Trust: <br /> The Essence of Data Responsibility
            </h1>
          </div>
        <div className="py-10 flex flex-col items-center">
          <div className="md:max-w-[500px] mb-3 md:mb-5 text-right">
            <h1 className="text-3xl text-white">
              Data Protection Policy And Practices
            </h1>
            <p className="text-xl text-gray-400 my-3 md:my-5">By Net-Trix</p>
          </div>
          <p className="text-lg md:text-xl text-gray-400 text-justify md:max-w-[700px]">
            In the modern era, companies are entrusted with vast amounts of
            client data, necessitating a profound commitment to data
            responsibility. Central to this responsibility is the preservation
            of client trust through ethical and secure data practices. Companies
            must prioritize data privacy by obtaining explicit consent and
            maintaining transparent communication about data usage. Robust
            security measures are imperative to safeguard client data from
            breaches and cyber threats. Furthermore, ethical considerations must
            guide data usage to ensure fairness and avoid harm. By adhering to
            principles of trust, integrity, and accountability, companies can
            fulfill their duty to clients and contribute to a more ethical and
            sustainable digital ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataResponsibility;
