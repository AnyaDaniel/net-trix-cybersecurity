import React from "react";

const Training = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start px-4 md:px-10">
      <div className="pt-5 md:pl-10 md:pt-24 md:w-[70%]">
        <div className="border-l-2 pl-2 md:max-w-[450px] border-r-gray-400">
          <h1 className="text-3xl text-white">
            DATA PROTECTION AND CYBERSECURITY
          </h1>
          <p className="text-xl text-gray-300 mb-5 mt-2">
            In today&apos;s digital landscape, ensuring the security and privacy
            of data is crucial for any organization. At Net-Trix Solutions
            Limited, we are committed to providing robust data protection and
            cybersecurity services to safeguard your business&apos;s most
            valuable assets.
          </p>
        </div>
        <div
          className="md:pt-60 mb:pb-5 pr-5 md:text-right flex flex-col items-end training"
        >
          <h1 className="text-6xl font-thin mb-6 text-gray-100">01.</h1>
          <h1 className="text-5xl text-white">
            CyberSecurity awareness and training
          </h1>
          <p className="text-xl text-gray-100 mt-2 mb-5 md:max-w-[550px]">
            Human error is one of the leading causes of data breaches. We offer
            training programs to educate your employees on best practices for
            cybersecurity:
          </p>
        </div>
      </div>
      <div className="w-[30%] hidden md:block">
        <div className="w-[100px] h-[180vh] pr-20 bg-gradient-to-b from-purple-500 to-cyan-500 mt-24"></div>
      </div>
    </div>
  );
};

export default Training;
