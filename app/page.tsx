"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Clients from "@/components/main/Clients";
import CarouselSection from "@/components/main/CarouselSection";
import Solution from "@/components/main/Solution";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/components/main/Footer";
import { FaAngleDown } from "react-icons/fa6";
import { useRef } from "react";
import { config, useSpring, animated } from "@react-spring/web";
import Image from "next/image";

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
      <div className="flex flex-col gap-20">
        <Parallax pages={15} ref={parallax} className="bg-[#030014] ">
          <Navbar />
          <Hero />
          <ParallaxLayer
            style={{ zIndex: 5 }}
            offset={0.9}
            onClick={() => parallax.current.scrollTo(1)}
            className="hidden lg:block"
          >
            <animated.div
              style={{ paddingBottom }}
              className="flex flex-col items-center cursor-pointer bg-gradient-to-b from-transparent to-[#1f293779]"
            >
              <p className="text-lg mt-4">Scroll</p>
              <FaAngleDown className="text-xl" />
            </animated.div>
          </ParallaxLayer>
          <Projects />
          <Encryption />
          <Solution num="" />
          <ParallaxLayer
            offset={6}
            sticky={{ start: 6, end: 6.33 }}
            className="items-center justify-center h-full/2 pt-50 hiidden lg:flex"
          >
            <Image
              src="/clients.png"
              alt="clients"
              width={150}
              height={150}
              className=""
            />
          </ParallaxLayer>
          <Clients />
          <CarouselSection />
          <ParallaxLayer offset={8.8} className="z-40">
          <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </main>
  );
}
