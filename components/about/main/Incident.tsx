import Image from "next/image";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const Incident = () => {
  return (
    <div className="bg-cyan-500 pt-2 mt-32 relative ">
      <div className="px-10 py-20 bg-[#030014]">
        <div className="text-center">
        <h1 className="text-6xl font-thin mb-2 text-gray-400">04.</h1>
          <h1 className="text-6xl text-purple-200">
            Incident Response and Management
          </h1>
          <p className="text-xl text-gray-300 m-auto pt-2 max-w-[650px]">
            In the event of a cyber incident, a quick and effective response is
            critical. Our incident response services include:
          </p>
        </div>
        <div className="pt-20 pb-10 px-20 flex flex-col md:flex-row justify-center items-center">
          <Image
            src="/incident.png"
            width={400}
            height={350}
            alt="incident image"
          />
          <div className="pl-40">
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
        <div className="m-auto max-w-[700px] text-center text-white text-2xl">
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
