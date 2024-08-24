import { Socials } from "@/constants";
import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div  className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[3px] md:px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center" style={{textDecoration: 'none'}}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 no-underline" >
            Net-Trix Solutions
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div id="navbar" className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="/about" className="cursor-pointer text-gray-200 hover:text-gray-400" style={{textDecoration: 'none'}}>
              About
            </a>
            <a href="/contact" className="cursor-pointer text-gray-200 hover:text-gray-400" style={{textDecoration: 'none'}}>
              Contact
            </a>
            <a href="#projects" className="cursor-pointer text-gray-200 hover:text-gray-400" style={{textDecoration: 'none'}}>
              Services
            </a>
          </div>
        </div>

        <div className="flex-row gap-5 hidden md:flex opacity-0">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;