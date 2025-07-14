'use client'

import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/about/main/Hero";
import Herosub from "@/components/about/sub/Herosub";
import Vision from "@/components/about/main/Vision";
import Philosophy from "@/components/about/sub/Philosophy";
import Carousel from "@/components/about/main/Carousel";
// import Clients from "@/components/main/Clients";
import CarouselSection from "@/components/main/CarouselSection";
import Choose from "@/components/main/Choose";
import Newsletter from "@/components/main/Newsletter";
import Footer from "@/components/main/Footer";
import { FaArrowUp } from "react-icons/fa6";



const About = () => {

    const parallax = useRef<IParallax>(null!);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <div>
        <Parallax
        pages={isTablet ? 6.7 : 7}
        ref={parallax}
        className="bg-[#110a37] "
      >

        <Navbar />

        {/* hero picture */}
        {isTablet?(<ParallaxLayer 
        offset={0.06}
        sticky={{start:0.06, end:0.45}}
        className="pt-10 hidden md:block"
        style={{ width: "50vw" }}
         >
            <Herosub/>
         </ParallaxLayer>):(
            <Herosub/>
         )}

         {/* hero */}
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

        

         {/* vision and mission statement */}
         {isTablet?(<ParallaxLayer offset={1} >
            <Vision/>
         </ParallaxLayer>):(
            <Vision/>
         )}

         {/* philosophy */}
        {isTablet?( <ParallaxLayer offset={1.5}
         sticky={{start:1.2, end:1.5}} 
         className="pt-40"
         >
            <Philosophy/>
         </ParallaxLayer>):(
            <Philosophy/>
         )}

         {/* services carousel */}
         {isTablet?(<ParallaxLayer offset={2.4}>
            <Carousel/>
         </ParallaxLayer>):(
            <Carousel/>
         )}
        
        {/* others */}
        {isTablet?(<ParallaxLayer offset={3.6}>
            {/* <Clients /> */}
            <CarouselSection />
            <Choose />
            <Newsletter />
            <Footer />
        </ParallaxLayer>):(
            <div>
                {/* <Clients /> */}
            <CarouselSection />
            <Choose />
            <Newsletter />
            <Footer />
            </div>
        )}
        </Parallax>
    </div>
  )
}

export default About