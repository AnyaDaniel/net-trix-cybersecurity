
import React from "react";
import ComplianceCarousel from "../sub/ComplianceCarousel";

const Compliance = () => {
  return (
    <div className="relative">
      <div className="md:ml-[35%] bg-gradient-to-b from-cyan-500 to-purple-500 rounded-tl-[1.5rem] pt-2 pl-2">
        <div className="py-32 pl-60 pr-10 bg-[#030014] rounded-tl-[calc(1.5rem-8px)] ">
        <h1 className="text-6xl font-thin mb-3 text-gray-400">03.</h1>
          <h1 className="text-white text-5xl font-semibold mb-5">
            Compliance and Risk Management
          </h1>
          <p className="text-gray-400 text-lg">
            Compliance with data protection regulations is essential for
            avoiding legal penalties and maintaining customer trust.
          </p>
        </div>
      </div>
      <div className="md:w-[40%] md:absolute top-[60%] left-[10%] bg-gradient-to-b from-purple-500 to-cyan-500 rounded-t-[1.5rem] pt-2 px-2">
      <div className="bg-[#030014] rounded-t-[calc(1.5rem-8px)] ">
        <ComplianceCarousel/>
      </div>
      </div>
    </div>
  );
};

export default Compliance;
