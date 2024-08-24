"use client";
import Training from "@/components/about/main/Training";
import DataResponsibility from "@/components/about/main/DataResponsibility";
import Hero from "@/components/about/main/Hero";
import CarouselSection from "@/components/main/CarouselSection";
import Clients from "@/components/main/Clients";
import Footer from "@/components/main/Footer";
import Navbar from "@/components/main/Navbar";
import Solution from "@/components/main/Solution";
import ProjectCard from "@/components/sub/ProjectCard";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Compliance from "@/components/about/main/Compliance";
import Incident from "@/components/about/main/Incident";
import Soc from "@/components/about/main/Soc";
import Choose from "@/components/main/Choose";
import Newsletter from "@/components/main/Newsletter";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const parallax = useRef<IParallax>(null!);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div>
      <Parallax
        pages={isTablet ? 14.2 : 21.3}
        ref={parallax}
        className="bg-[#030014] "
      >
        <Navbar />
        {isTablet ? (
          <ParallaxLayer offset={0}>
            <Hero />
          </ParallaxLayer>
        ) : (
          <Hero />
        )}
        {/* back to top */}
        <ParallaxLayer
          onClick={() => parallax.current.scrollTo(0)}
          sticky={{ start: 1, end: 16 }}
          className="pt-[49%] ml-[100%] lg:ml-[96%] hidden md:block"
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
          className="z-10 hidden lg:block"
        >
          <div className="md:ml-[48%] rounded-lg shadow-lg shadow-[#2A0E61]/50 bg-[#472e5f] w-full md:w-[45%]">
            <div className="py-10 px-16 text-right">
              <h2 className="text-7xl font text-white ">
                Defend Your Business
                <br />
                Like a Pro
              </h2>
            </div>
          </div>
        </ParallaxLayer>

        {/* training section */}
        {isTablet ? (
          <ParallaxLayer offset={1}>
            <Training />
          </ParallaxLayer>
        ) : (
          <Training />
        )}

        {/* project card start */}
        {isTablet ? (
          <ParallaxLayer
            sticky={{ start: 2.25, end: 3.25 }}
            style={{ zIndex: 5 }}
            className="w-full pt-20"
          >
            <ProjectCard
              src="/phishing.png"
              title="Phishing Awareness"
              description="Training employees to recognize and avoid phishing attempts."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full w-[30.6vw] ml-[2vw] h-[50vh]"
            />
          </ParallaxLayer>
        ) : (
          <div className="w-full pt-0">
            <ProjectCard
              src="/phishing.png"
              title="Phishing Awareness"
              description="Training employees to recognize and avoid phishing attempts."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-[50vh]"
            />
          </div>
        )}
        {isTablet ? (
          <ParallaxLayer
            sticky={{ start: 2.65, end: 3.25 }}
            style={{ zIndex: 5 }}
            className="w-full pt-20"
          >
            <ProjectCard
              src="/practices.png"
              title="Security Best Practices"
              description="Educating staff on secure password practices, recognizing suspicious activities, and protecting sensitive information."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full w-[30.6vw] ml-[34.6vw] h-[50vh]"
            />
          </ParallaxLayer>
        ) : (
          <div className="w-full pt-0">
            <ProjectCard
              src="/practices.png"
              title="Security Best Practices"
              description="Educating staff on secure password practices, recognizing suspicious activities, and protecting sensitive information."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-[50vh]"
            />
          </div>
        )}
        {isTablet ? (
          <ParallaxLayer
            sticky={{ start: 3, end: 3.25 }}
            style={{ zIndex: 5 }}
            className="w-full pt-20"
          >
            <ProjectCard
              src="/incidence.png"
              title="Incident Response Training"
              description="Preparing your team to respond effectively to cybersecurity incidents."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full w-[30.6vw] ml-[67.2vw] h-[50vh]"
            />
          </ParallaxLayer>
        ) : (
          <div className="w-full pt-0">
            <ProjectCard
              src="/incidence.png"
              title="Incident Response Training"
              description="Preparing your team to respond effectively to cybersecurity incidents."
              cls="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-[50vh]"
            />
          </div>
        )}
        {/* project card end */}

        {/* data resposibility animation */}
        <ParallaxLayer
          offset={3.25}
          sticky={{ start: 3.25, end: 4.55 }}
          className="hidden lg:block"
          style={{ paddingTop: "37%" }}
        >
          <div className="rounded-r-[100px] ml-16 px-16 py-3 w-[30%] bg-purple-900">
            <h1 className="text-2xl text-white text-right">
              Net-Trix Solutions
            </h1>
          </div>
        </ParallaxLayer>
        {isTablet ? (
          <ParallaxLayer offset={3.85}>
            <DataResponsibility />
          </ParallaxLayer>
        ) : (
          <DataResponsibility />
        )}

        {/* solution section */}
        {isTablet ? (
          <ParallaxLayer
            offset={5.39}
            sticky={{ start: 5.39, end: 6.79 }}
            className="z-[-1]"
          >
            <div className="md:w-[50vw] w-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-tr-[2rem] pt-4 pr-4 relative z-[5]">
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
        ) : (
          <div
            className="z-[-1]"
          >
            <div className="md:w-[50vw] w-full bg-gradient-to-b from-purple-500 to-cyan-500 rounded-tr-[2rem] pt-4 relative z-[5]">
              <div className="w-full h-full p-4 bg-[#030014] rounded-tr-[calc(2rem-16px)] ">
                <motion.div
                  variants={slideInFromTop}
                  className="flex flex-col gap-6 my-2 text-5xl text-left text-white w-full h-auto"
                >
                  <h1 className="text-5xl font-thin mb-2 text-left text-gray-400">
                    02.
                  </h1>
                  Cybersecurity
                  <span className="text-transparent bg-clip-text text-6xl tracking-widest bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[-20px]">
                    {" "}
                    Solution
                  </span>
                </motion.div>
                <div className="">
                  <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-xl text-left text-gray-400 my-2 pb-7 max-w-[500px]"
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
          </div>
        )}
        {isTablet ? (
          <ParallaxLayer offset={5.39} className="md:ml-[50vw]">
            <Solution />
          </ParallaxLayer>
        ) : (
          <div className="md:ml-[50vw]">
            <Solution />
          </div>
        )}

        {/* compliance, incident and soc sections */}
        {isTablet ? (
          <ParallaxLayer offset={7.8}>
            <Compliance />
            <Incident />
            <Soc />
            <Clients />
            <CarouselSection />
            <Choose />
            <Newsletter />
            <Footer />
          </ParallaxLayer>
        ) : (
          <div>
            <Compliance />
            <Incident />
            <Soc />
            <Clients />
            <CarouselSection />
            <Choose />
            <Newsletter />
            <Footer />
          </div>
        )}
      </Parallax>
    </div>
  );
};

export default About;
