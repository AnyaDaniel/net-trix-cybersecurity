"use client";
import React from "react";
import { Parallax } from "@react-spring/parallax";
import Hero from "@/components/contact/Hero";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ParallaxLayer } from "@react-spring/parallax";
import { FaGlobe, FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <div>
      <Parallax
        pages={isTablet ? 3 : 4}
        className="z-[10] md:flex-row gap-10 bg-[#030014] "
      >
        <Navbar />

        {isTablet ? (
          <ParallaxLayer offset={0}>
            <Hero />
          </ParallaxLayer>
        ) : (
          <Hero />
        )}
        {isTablet ? (
          <ParallaxLayer offset={0.6} sticky={{ start: 0.6, end: 1.4 }}>
            <div className="md:ml-[10%] md:pt-[40px] md:h-[95vh] md:w-[80%]">
              <div className=" bg-[#030014] rounded-xl shadow-lg shadow-[#2A0E61]/50 p-3 h-full w-full">
                <div className="flex flex-col md:flex-row justify-center h-full items-center">
                  <div className="bg-[url('/socials.jpg')] bg-cover rounded-xl h-full md:w-[40%] p-10 text-white">
                    <h1 className="text-3xl mb-14">Contact Information</h1>
                    <p className="flex flex-row items-center my-8">
                      <FaPhone />
                      <span className="text-sm ml-[6px]">
                        +234 906 000 0456
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaEnvelope />
                      <span className="text-sm ml-[6px]">
                        INFO@NET-TRIXSOLUTIONS.COM
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaGlobe />
                      <span className="text-sm ml-[6px]">
                        WWW.NET-TRIXSOLUTIONS.COM
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaLocationDot />
                      <span className="text-sm ml-[6px]">
                        SUITE 201, THE KINGS PLAZA, PLOT 307, AHMADU BELLO WAY,
                        ABUJA
                      </span>
                    </p>
                    <p className="text-sm mt-16">
                      NIGERIA, UNITED KINGDOM, CANADA
                    </p>
                  </div>
                  <div className="md:w-[60%] w-full h-full py-10 md:px-10 text-gray-400 flex flex-col items-center">
                    <h1 className="text-3xl mb-10 text-white">Write to Us</h1>
                    <form action="" className="w-full h-full">
                      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                        <div className="w-full md:mr-5">
                          <label htmlFor="name" className=" text-sm">
                            Your Name
                          </label>
                          <br />
                          <input
                            type="text"
                            className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                          />
                        </div>
                        <div className="w-full md:ml-5 md:mt-0 mt-10">
                          <label htmlFor="name" className=" text-sm">
                            Your Email
                          </label>
                          <br />
                          <input
                            type="text"
                            className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                          />
                        </div>
                      </div>
                      <div className="w-full my-10">
                        <label htmlFor="name" className=" text-sm">
                          Your Subject
                        </label>
                        <br />
                        <input
                          type="text"
                          className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                        />
                      </div>
                      <div className="w-full my-10">
                        <label
                          htmlFor="name"
                          className=" text-md text-purple-500"
                        >
                          Message
                        </label>
                        <br />
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Write us your message"
                          className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full resize-none"
                        ></textarea>
                      </div>
                      <input
                        type="submit"
                        value="Send Message"
                        className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>
        ) : (
            <div className="md:ml-[10%] md:pt-[40px] md:h-[95vh] md:w-[80%]">
              <div className=" bg-[#030014] rounded-xl shadow-lg shadow-[#2A0E61]/50 p-3 h-full w-full">
                <div className="flex flex-col md:flex-row justify-center h-full items-center">
                  <div className="bg-[url('/socials.jpg')] bg-cover rounded-xl h-full md:w-[40%] p-10 text-white">
                    <h1 className="text-3xl mb-14">Contact Information</h1>
                    <p className="flex flex-row items-center my-8">
                      <FaPhone />
                      <span className="text-sm ml-[6px]">
                        +234 906 000 0456
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaEnvelope />
                      <span className="text-sm ml-[6px]">
                        INFO@NET-TRIXSOLUTIONS.COM
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaGlobe />
                      <span className="text-sm ml-[6px]">
                        WWW.NET-TRIXSOLUTIONS.COM
                      </span>
                    </p>
                    <p className="flex flex-row items-center my-8">
                      <FaLocationDot />
                      <span className="text-sm ml-[6px]">
                        SUITE 201, THE KINGS PLAZA, PLOT 307, AHMADU BELLO WAY,
                        ABUJA
                      </span>
                    </p>
                    <p className="text-sm mt-16">
                      NIGERIA, UNITED KINGDOM, CANADA
                    </p>
                  </div>
                  <div className="md:w-[60%] w-full h-full py-10 md:px-10 text-gray-400 flex flex-col items-center">
                    <h1 className="text-3xl mb-10 text-white">Write to Us</h1>
                    <form action="" className="w-full h-full">
                      <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                        <div className="w-full md:mr-5">
                          <label htmlFor="name" className=" text-sm">
                            Your Name
                          </label>
                          <br />
                          <input
                            type="text"
                            className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                          />
                        </div>
                        <div className="w-full md:ml-5 mt-10">
                          <label htmlFor="name" className=" text-sm">
                            Your Email
                          </label>
                          <br />
                          <input
                            type="text"
                            className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                          />
                        </div>
                      </div>
                      <div className="w-full my-10">
                        <label htmlFor="name" className=" text-sm">
                          Your Subject
                        </label>
                        <br />
                        <input
                          type="text"
                          className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full"
                        />
                      </div>
                      <div className="w-full my-10">
                        <label
                          htmlFor="name"
                          className=" text-md text-purple-500"
                        >
                          Message
                        </label>
                        <br />
                        <textarea
                          name="message"
                          rows={4}
                          placeholder="Write us your message"
                          className="outline-none focus:text-white bg-transparent py-3 border-b-[1px] border-b-gray-400 w-full resize-none"
                        ></textarea>
                      </div>
                      <input
                        type="submit"
                        value="Send Message"
                        className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
        )}

        {isTablet ? (
          <ParallaxLayer offset={2.5}>
            <Footer />
          </ParallaxLayer>
        ) : (
            <Footer />
        )}
      </Parallax>
    </div>
  );
};

export default Contact;
