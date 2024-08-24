import React from "react";
import Image from "next/image";

import Carousel from "../sub/Carousel";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const imagesItems = [
  {
    id: 1,
    component: (
      <div className="bg-[url('/card1.svg')] bg-cover h-auto md:w-auto w-screen pt-10 md:pt-16 pb-10 px-20 testimonial">
        <FaQuoteLeft className="text-2xl md:text-4xl text-gray-300 text-center" />
        <p className="text-base md:text-lg text-left pl-2 md:pl-10 text-white">
          Working with Net-Trix Solutions has been a game changer for us. Their team is exceptionally knowledgeable and proactive in identifying potential threats before they become critical issues. We now have peace of mind knowing our data and systems are in safe hands.
        </p>
        <p className="text-right text-white text-base md:text-lg">- Jane Doe</p>
      </div>
    ),
  },
  {
    id: 2,
    component: (
      <div className="bg-[url('/card2.svg')] bg-cover h-auto md:w-auto w-screen pt-10 md:pt-16 pb-10 px-20 testimonial">
        <FaQuoteLeft className="text-2xl md:text-4xl text-gray-300 text-center" />
        <p className="text-base md:text-lg text-left pl-2 md:pl-10 text-white">
          We were constantly worried about the security of our financial data until we partnered with Net-Trix Solutions. Their tailored solutions and round-the-clock monitoring have significantly reduced our risk and allowed us to focus on growing our business.
        </p>
        <p className="text-right text-white text-base md:text-lg">- John Smith</p>
      </div>
    ),
  },
  {
    id: 3,
    component: (
      <div className="bg-[url('/card3.svg')] bg-cover h-auto md:w-auto w-screen pt-10 md:pt-16 pb-10 px-20 testimonial">
        <FaQuoteLeft className="text-2xl md:text-4xl text-gray-300 text-center" />
        <p className="text-base md:text-lg text-left pl-2 md:pl-10 text-white">
          The expertise and dedication of the team at Net-Trix Solutions are unmatched. They&apos;ve helped us implement comprehensive security protocols that not only meet but exceed indutry standards, ensuring our patients data remains confidential and secure.
        </p>
        <p className="text-right text-white text-base md:text-lg">- Sarah Lee</p>
      </div>
    ),
  },
  {
    id: 4,
    component: (
      <div className="bg-[url('/card4.svg')] bg-cover h-auto md:w-auto w-screen pt-10 md:pt-16 pb-10 px-20 testimonial">
        <FaQuoteLeft className="text-2xl md:text-4xl text-gray-300 text-center" />
        <p className="text-base md:text-lg text-left pl-2 md:pl-10 text-white">
          After a security breach last year, we needed a relaible partner to restore our systems and prevent future incidents. Net-Trix Solutions not only recovered our data but also put in place robust security measures that have kept us protected ever since. We couldn&apos;t be more satiisfied with their service.
        </p>
        <p className="text-right text-white text-base md:text-lg">- Michael Brown</p>
      </div>
    ),
  },
];

const CarouselSection = () => {
  return (
    <div className="h-[50vh] md:h-[70vh] w-screen overflow-hidden bg-bg text-white flex flex-row justify-center z-[10] md:pt-20">
      <Carousel items={imagesItems} />
      
    </div>
  );
};

export default CarouselSection;
