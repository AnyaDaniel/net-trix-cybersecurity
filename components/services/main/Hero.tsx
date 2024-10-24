import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover h-screen w-full bg-[url('/aboutbg.jpg')] z-[5] border-b-[#5c3c63] border-b-4 pt-20 px-20 pb-2 hero">
      <div className="text-right text-gray-500 md:h-[80px] w-full">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold border-r-[20px] border-r-[#5c3c63] text-4xl md:text-6xl h-[85px] md:h-[80px] mb-0">
          Net-Trix CyberSecurity
        </h1>
      </div>
      
    </div>
  );
};

export default Hero;
