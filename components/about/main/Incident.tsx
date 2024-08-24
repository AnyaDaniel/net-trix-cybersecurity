import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle } from "react-icons/fa";

const Incident = () => {
  return (
    <div className="bg-cyan-500 pt-2 md:mt-32 relative ">
      <div className="px-10 py-20 bg-[rgb(3,0,20)] incident">
        <div className="text-center md:text-6xl">
          <h1 className="font-thin mb-2 text-gray-400">04.</h1>
          <h1 className="text-purple-200">
            Incident Response and Management
          </h1>
          <p className="text-xl text-gray-300 m-auto pt-2 max-w-[650px]">
            In the event of a cyber incident, a quick and effective response is
            critical. Our incident response services include:
          </p>
        </div>
        <div className="pt-20 pb-10 md:px-20 flex flex-col md:flex-row justify-center items-center">
          <motion.div
          variants={slideInFromLeft(0)}
          >
            <Image
              src="/incident.png"
              width={600}
              height={550}
              alt="incident image"
            />
          </motion.div>
          <div className="md:pl-40 pt-10 md:pt-0">
            <div className="flex justify-center items-start">
              <div className="w-[20px] pt-2">
                <FaRegCheckCircle className="text-cyan-500 text-xl" />
              </div>
              <p className="text-xl pl-2 text-white">
                Incident Identification: Detecting and identifying security
                incidents in real-time.
              </p>
            </div>
            <div className="flex justify-center items-start">
              <div className="w-[20px] pt-2">
                <FaRegCheckCircle className="text-cyan-500 text-xl" />
              </div>
              <p className="text-xl pl-2 text-white">
                Containment and Eradication: Isolating affected systems to
                prevent the spread of the attack and removing malicious
                components.
              </p>
            </div>
            <div className="flex justify-center items-start">
              <div className="w-[20px] pt-2">
                <FaRegCheckCircle className="text-cyan-500 text-xl" />
              </div>
              <p className="text-xl pl-2 text-white">
                Recovery and Post-Incident Review: Restoring normal operations
                and conducting a thorough review to improve future security
                measures.
              </p>
            </div>
          </div>
        </div>
        <div className="m-auto max-w-[700px] text-center text-white md:text-2xl">
          <p>
            At Net-Trix Solutions Limited, we prioritize your data security and
            are dedicated to providing cutting-edge solutions tailored to your
            specific needs. Contact us today to learn how we can help protect
            your business in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Incident;
