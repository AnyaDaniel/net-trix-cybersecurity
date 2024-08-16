"use client";
import DataProtection from "@/components/about/main/DataProtection";
import DataResponsibility from "@/components/about/main/DataResponsibility";
import Hero from "@/components/about/main/Hero";
import CarouselSection from "@/components/main/CarouselSection";
import Clients from "@/components/main/Clients";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Solution from "@/components/main/Solution";
import ProjectCard from "@/components/sub/ProjectCard";
import ProjectParallax from "@/components/sub/ProjectParallax";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Compliance from "@/components/about/main/Compliance";
import Incident from "@/components/about/main/Incident";
import Soc from "@/components/about/main/Soc";

const About = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <div>
      <Parallax pages={15} ref={parallax} className="bg-[#030014] ">
        <Navbar />
        <Hero />
        {/* back to top */}
        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(0)}
          sticky={{ start: 1, end: 16 }}
          className="pt-[49%] ml-[96%]"
          style={{ height: "2.2rem", width: "2.2rem" }}
        >
          <div className="bg-[#030014] rounded-[50%] flex items-center justify-center h-[2.2rem] w-[2.2rem] border-1 border-gray-300 cursor-pointer">
            <FaArrowUp className="text-gray-300 text-[1.3rem]" />
          </div>
        </ParallaxLayer>

        {/* hero card */}
        <ParallaxLayer
          offset={0.82}
          sticky={{ start: 0.82, end: 1.4 }}
          className="z-10"
        >
          <div className="md:ml-[48%] rounded-lg shadow-lg shadow-[#2A0E61]/50 bg-[#472e5f] border border-[#2A0E61] w-full md:w-[45%]">
            <div className="py-10 px-16 text-right">
              <h2 className="text-7xl font text-white ">
                Defend Your Business
                <br />
                Like a Pro
              </h2>
            </div>
          </div>
        </ParallaxLayer>
        <DataProtection />
        {/* project card start */}
        <ParallaxLayer
          sticky={{ start: 2.25, end: 3.25 }}
          style={{ zIndex: 5 }}
          className="w-full pt-20"
        >
          <ProjectCard
            src="/os.png"
            title="Data Encryption"
            description=" Protecting your data in transit and at rest using advanced encryption techniques."
            cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[2vw]"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.65, end: 3.25 }}
          style={{ zIndex: 5 }}
          className="w-full pt-20"
        >
          <ProjectCard
            src="/folder.png"
            title="Data Backup and Recovery"
            description="Implementing reliable backup solutions to ensure data availability and integrity in case of hardware failures or cyber incidents."
            cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[34.6vw]"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 3.25 }}
          style={{ zIndex: 5 }}
          className="w-full pt-20"
        >
          <ProjectCard
            src="/analyzer.png"
            title="Data Loss Prevention (DLP)"
            description="Identifying and preventing potential data breaches by monitoring and controlling data transfers across your network."
            cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full md:w-[30.6vw] md:ml-[67.2vw]"
          />
        </ParallaxLayer>
        {/* project card end */}

        {/* data resposibility animation */}
        <ParallaxLayer
          offset={3.25}
          sticky={{ start: 3.25, end: 4.55 }}
          className=""
          style={{ paddingTop: "37%" }}
        >
          <div className="rounded-r-[100px] ml-16 px-16 py-3 w-[30%] bg-purple-900">
            <h1 className="text-2xl text-white text-right">
              Net-Trix Solutions
            </h1>
          </div>
        </ParallaxLayer>
        <DataResponsibility />

        {/* solution section */}
        <ParallaxLayer
          offset={5.39}
          sticky={{ start: 5.39, end: 6.79 }}
          className="z-[-2]"
        >
          <div className="md:w-[50vw] w-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-tr-[2rem] pt-4 pr-4">
            <div className="w-full h-screen flex flex-col items-center justify-center p-20 bg-[#030014] rounded-tr-[calc(2rem-16px)] ">
              <motion.div
                variants={slideInFromTop}
                className="flex flex-col gap-6 my-6 mr-10 text-5xl text-right text-white w-full h-auto"
              >
                <h1 className="text-6xl font-thin mb-2 text-right text-gray-400">
                  02.
                </h1>
                Cybersecurity
                <span className="text-transparent bg-clip-text text-6xl tracking-widest bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[-20px]">
                  {" "}
                  Solution
                </span>
              </motion.div>
              <div className="flex flex-col items-end">
                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-xl text-right text-gray-400 my-5 pb-7 max-w-[500px]"
                >
                  Cybersecurity threats are ever-evolving, and so are our
                  solutions. We provide a range of services to keep your IT
                  infrastructure secure.
                </motion.p>
                <motion.a
                  variants={slideInFromLeft(1)}
                  className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                  style={{ textDecoration: "none" }}
                >
                  Learn More
                </motion.a>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.39} className="md:ml-[50vw]">
          <Solution />
        </ParallaxLayer>

        {/* compliance, incident and soc sections */}
        <ParallaxLayer offset={7.81}>
          <Compliance />
          <Incident />
          <Soc />
        </ParallaxLayer>
        {/* <Clients /> */}
        {/* <CarouselSection /> */}

        {/* <Footer /> */}
      </Parallax>
    </div>
  );
};

export default About;
