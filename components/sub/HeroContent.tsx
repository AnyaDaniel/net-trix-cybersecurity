"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";
import { ParallaxLayer } from "@react-spring/parallax";
import { useMediaQuery } from "react-responsive";

const HeroContent = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <div>
      {isTablet ? (
        <ParallaxLayer style={{ zIndex: 5 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            className="px-4 md:px-20 mt-20 w-full"
          >
            <div className="flex flex-row items-center justify-center w-full">
              <div className="h-full w-full flex flex-col justify-center m-auto text-start">
                <motion.div
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 md:mt-6 text-6xl text-white max-w-[600px] w-auto h-auto"
                >
                  <span>
                    Providing
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
                      {" "}
                      the Best{" "}
                    </span>
                    Security Experience
                  </span>
                </motion.div>

                <motion.p
                  variants={slideInFromLeft(0.8)}
                  className="text-lg text-gray-400 my-10 max-w-[600px]"
                >
                  I&apos;m a full stack software engineer with experience in
                  website, mobile, and software development. check out my
                  proects and skills.
                </motion.p>

                <motion.a
                  style={{ textDecoration: "none" }}
                  variants={slideInFromLeft(1)}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                  href="/about"
                >
                  Learn More
                </motion.a>
              </div>
              <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center"
              >
                <Image
                  src="/shield.png"
                  alt="work icons"
                  height={650}
                  width={650}
                />
              </motion.div>
            </div>
          </motion.div>
        </ParallaxLayer>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          className="px-4 mt-20 w-full h-screen"
        >
          <div className="flex flex-row items-center justify-center w-full">
            <div className="h-full w-full flex flex-col justify-center m-auto text-start">
              <motion.div
                variants={slideInFromLeft(0.5)}
                className="flex flex-col gap-6 text-6xl text-white max-w-[600px] w-auto h-auto"
              >
                <span>
                  Providing
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">
                    {" "}
                    the Best{" "}
                  </span>
                  Security Experience
                </span>
              </motion.div>

              <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-10 max-w-[600px]"
              >
                In an increasingly connected world, ypur data is ore valuable than ever. At Net-Trix Solutions, we provide cutting-edge solutions that safeguard your business from emerging cyber threats.  
              </motion.p>

              <motion.a
                style={{ textDecoration: "none" }}
                variants={slideInFromLeft(1)}
                className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                href="/about"
              >
                Learn More
              </motion.a>
            </div>
            <motion.div
              variants={slideInFromRight(0.8)}
              className="w-full h-full flex justify-center items-center"
            >
              <Image
                src="/shield.png"
                alt="work icons"
                height={650}
                width={650}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeroContent;
