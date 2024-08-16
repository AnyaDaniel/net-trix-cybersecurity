"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Clients from "@/components/main/Clients";
import CarouselSection from "@/components/main/CarouselSection";
import Solution from "@/components/main/Solution";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/components/main/Footer";
import { FaAngleDown, FaArrowUp } from "react-icons/fa6";
import { useRef } from "react";
import { config, useSpring, animated } from "@react-spring/web";
import Image from "next/image";
import PlatformCard from "@/components/sub/PlatformCard";
import PlatformParallax from "@/components/sub/PlatformParallax";
import ProjectText from "@/components/sub/ProjectText";
import ProjectCard from "@/components/sub/ProjectCard";
import Trust from "@/components/main/Trust";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Choose from "@/components/main/Choose";

export default function Home() {
  const parallax = useRef<IParallax>(null!);

  const [{ paddingBottom }] = useSpring(
    () => ({
      from: { paddingBottom: "8px" },
      to: [{ paddingBottom: "8px" }, { paddingBottom: "0" }],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  );

  return (
    <main className="h-full w-full">
      <Parallax
        pages={16}
        ref={parallax}
        className="bg-[#030014] "
        style={{ zIndex: 10 }}
      >
        <Navbar />
        <Hero />
        {/* scroll button */}
        <ParallaxLayer
          style={{ zIndex: 5 }}
          offset={0.9}
          onClick={() => parallax.current.scrollTo(1)}
          className="hidden lg:block"
        >
          <animated.div
            style={{ paddingBottom }}
            className="flex flex-col items-center cursor-pointer bg-gradient-to-b from-transparent to-[#1f293779] text-gray-300"
          >
            <p className="text-lg mt-2 mb-1">Scroll</p>
            <FaAngleDown className="text-xl" />
          </animated.div>
        </ParallaxLayer>

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

        {/* platform section text */}
        <ParallaxLayer
          sticky={{ start: 1, end: 4 }}
          style={{
            zIndex: -2,
            height: "100vh",
            width: "100vw",
            backgroundSize: "cover",
          }}
          className='text-center flex flex-col justify-center items-center bg-[url("/platformbg.jpg")] p-4 h-full w-full'
        >
          <h1 className="text-purple-400 text-lg mb-10">
            CYBERSECURITY PLATFORM
          </h1>
          <div className="md:w-[70vw]">
            <h1 className="text-gray-400 text-6xl font-bold ">
              The World&apos;s Most Powerful Networking and Security Operating
              System
            </h1>
            <p className="text-gray-300 mt-10">
              Some IN COLLABORATION WITH FORTINET content
            </p>
          </div>
        </ParallaxLayer>
        <PlatformParallax />

        <ProjectText />

        {/* project card start */}
        <ParallaxLayer
          sticky={{ start: 5.5, end: 6.5 }}
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
          sticky={{ start: 5.9, end: 6.5 }}
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
          sticky={{ start: 6.25, end: 6.5 }}
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

        {/* encryption */}
        <Encryption />

        {/* solution section text */}
        <ParallaxLayer
          offset={8.7}
          sticky={{ start: 8.7, end: 10.1 }}
          className="w-full md:w-[50vw] h-screen flex flex-col items-center justify-center px-20 py-20 md:ml-[50vw] "
          style={{ width: "50vw", paddingRight: "80px" }}
        >
          <motion.div
            variants={slideInFromTop}
            className="my-6 text-5xl text-center text-white w-full h-auto"
          >
            Cybersecurity
            <span className="text-transparent bg-clip-text text-6xl tracking-wider bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[-20px] text-center">
              {" "}
              Solution
            </span>
          </motion.div>
          <div className="flex flex-col items-center">
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-xl text-center text-gray-400 my-5 pb-7 "
            >
              Cybersecurity threats are ever-evolving, and so are our solutions.
              We provide a range of services to keep your IT infrastructure
              secure.
            </motion.p>
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              href="/about#solution"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </motion.a>
          </div>
        </ParallaxLayer>

        {/* solution cards */}
        <ParallaxLayer offset={8.7}>
          <Solution />
        </ParallaxLayer>

        {/* trust section */}
        <ParallaxLayer offset={11.2}>
          <Trust />
        </ParallaxLayer>

        {/* client section image */}
        <ParallaxLayer
          offset={12}
          sticky={{ start: 12, end: 12.45 }}
          className="items-center justify-center pt-50 hiidden lg:flex"
        >
          <Image
            src="/clients.png"
            alt="clients"
            width={150}
            height={150}
            className=""
          />
        </ParallaxLayer>

        {/* clients section */}
        <ParallaxLayer offset={12.6}>
          <Clients />
        </ParallaxLayer>

        {/* testimonial section */}
        <ParallaxLayer offset={14.7}>
          <CarouselSection />
        </ParallaxLayer>

        {/* choose us section */}
        <ParallaxLayer offset={14.1}>
          <Choose />
        </ParallaxLayer>

        {/* footer */}
        <ParallaxLayer offset={15.6} className="z-40">
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
