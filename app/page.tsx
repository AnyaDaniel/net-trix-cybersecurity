"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Clients from "@/components/main/Clients";
import CarouselSection from "@/components/main/CarouselSection";
import Solution from "@/components/main/Solution";
import Navbar from "@/components/main/Navbar";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/components/main/Footer";
import { FaAngleDown, FaArrowUp } from "react-icons/fa6";
import { useRef } from "react";
import { config, useSpring, animated } from "@react-spring/web";
import { useMediaQuery } from "react-responsive";
import PlatformParallax from "@/components/sub/PlatformParallax";
import Trust from "@/components/main/Trust";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import Choose from "@/components/main/Choose";
import Newsletter from "@/components/main/Newsletter";

export default function Home() {
  const parallax = useRef<IParallax>(null!);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });

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
      {isTablet ? (
        <Parallax
          pages={isDesktop ? 13.2 : 15}
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
            className="pt-[49%] ml-[100%] lg:ml-[96%] hidden md:block"
            style={{ height: "2.2rem", width: "2.2rem" }}
          >
            <div className="bg-[#030014] rounded-[50%] flex items-center justify-center h-[2.2rem] w-[2.2rem] border-1 border-gray-300 cursor-pointer">
              <FaArrowUp className="text-gray-300 text-[1.3rem]" />
            </div>
          </ParallaxLayer>

          {/* platform section */}
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
              <h1 className="text-gray-400 text-4xl md:text-6xl font-bold ">
                The World&apos;s Most Powerful Networking and Security Operating
                System
              </h1>
              <p className="text-gray-300 mt-10">
                IN COLLABORATION WITH FORTINET
              </p>
            </div>
          </ParallaxLayer>
          <PlatformParallax />

          {/* encryption */}
          <ParallaxLayer offset={5.1}>
            <Encryption />
          </ParallaxLayer>

          {/* solution section text */}
          <ParallaxLayer
            offset={6.2}
            sticky={{ start: 6.2, end: 7.6 }}
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
                Cybersecurity threats are ever-evolving, and so are our
                solutions. We provide a range of services to keep your IT
                infrastructure secure.
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
          <ParallaxLayer offset={6.2}>
            <Solution />
          </ParallaxLayer>

          {/* trust, clients, carouselsection, choose, newsletter, footer sections */}
          <ParallaxLayer offset={8.7}>
            <Trust />
            <Clients />
            <CarouselSection />
            <Choose />
            <Newsletter />
            <Footer />
          </ParallaxLayer>
        </Parallax>
      ) : (
        <div className="bg-[#030014] ">
          <Navbar />
          <Hero />
          {/* platform section */}
          <div
            style={{
              backgroundSize: "cover",
            }}
            className='text-center flex flex-col justify-center items-center bg-[url("/platformbg.jpg")] p-4 h-full w-full'
          >
            <h1 className="text-purple-400 text-lg mb-10">
              CYBERSECURITY PLATFORM
            </h1>
            <div className="">
              <h1 className="text-gray-400 text-4xl md:text-6xl font-bold ">
                The World&apos;s Most Powerful Networking and Security Operating
                System
              </h1>
              <p className="text-gray-300 mt-10">
                Some IN COLLABORATION WITH FORTINET content
              </p>
            </div>
          </div>
          <PlatformParallax />

          {/* encryption */}
          <Encryption />

          {/* solution section text */}
          <div className="w-full px-4 py-20 md:ml-[50vw] ">
            <motion.div
              variants={slideInFromTop}
              className="mt-6 text-5xl text-left text-white w-full h-auto"
            >
              Cybersecurity
              <span className="text-transparent bg-clip-text text-6xl tracking-wider bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mt-[-20px] text-left">
                {" "}
                Solution
              </span>
            </motion.div>
            <div className="">
              <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-xl text-left text-gray-400 my-4"
              >
                Cybersecurity threats are ever-evolving, and so are our
                solutions. We provide a range of services to keep your IT
                infrastructure secure.
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
          </div>
          {/* solution cards */}
          <Solution />
          {/* trust, clients, carouselsection, choose, newsletter, footer sections */}
          <Trust />
          <Clients />
          <CarouselSection />
          <Choose />
          <Newsletter />
          <Footer />
        </div>
      )}
    </main>
  );
}
