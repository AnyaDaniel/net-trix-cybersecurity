import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover h-screen w-full bg-[url('/aboutbg.jpg')] z-[5] opacity-[0.6] border-b-[#5c3c63] border-b-4 pt-56 px-20">
      <div className="text-right text-gray-500 text-6xl">
        <h1 className="text-transparent bg-clip-text right-2 bg-gradient-to-r from-purple-500 to-cyan-500 font-bold border-r-[20px] border-r-[#5c3c63] pb-5">
          Net-Trix CyberSecurity
        </h1>
      </div>
      <div className='absolute bottom-[-190px] right-0 md:right-20 rounded-lg shadow-lg shadow-[#2A0E61]/50 bg-[#472e5f] backdrop-blur-md border border-[#2A0E61] w-full md:w-[45%]'>
        <div className="py-10 px-16 text-right">
            <h2 className='text-7xl font text-white '>Defend Your Business<br />Like a Pro</h2>
        </div>
    </div>
    </div>
  );
};

export default Hero;
