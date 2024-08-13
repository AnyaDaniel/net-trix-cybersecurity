import React from "react";

const DataResponsibility = () => {
  return (
    <div>
      <div className="pt-52 pb-20 flex flex-col-reverse md:flex-row justify-end items-start">
        <div className="text-gray-400 text-5xl text-center pr-40 w-[70]">
          <h1 className="md:max-w-[550px]">
            Upholding Client Trust: <br /> The Essence of Data Responsibility
          </h1>
        </div>
        <div className="rounded-l-[100px] px-14 py-5 w-[30%] bg-purple-900">
          <h1 className="text-2xl text-white">Net-Trix Solutions</h1>
        </div>
      </div>
      <div className="p-10 flex flex-col items-center">
        <div className="md:max-w-[500px] mb-5 text-right">
          <h1 className="text-3xl text-white">
            Data Protection Policy And Practices
          </h1>
          <p className="text-xl text-gray-400 my-5">By Net-Trix</p>
        </div>
        <p className="text-xl text-gray-400 text-justify md:max-w-[700px]">
          In the modern era, companies are entrusted with vast amounts of client
          data, necessitating a profound commitment to data responsibility.
          Central to this responsibility is the preservation of client trust
          through ethical and secure data practices. Companies must prioritize
          data privacy by obtaining explicit consent and maintaining transparent
          communication about data usage. Robust security measures are
          imperative to safeguard client data from breaches and cyber threats.
          Furthermore, ethical considerations must guide data usage to ensure
          fairness and avoid harm. By adhering to principles of trust,
          integrity, and accountability, companies can fulfill their duty to
          clients and contribute to a more ethical and sustainable digital
          ecosystem.
        </p>
      </div>
    </div>
  );
};

export default DataResponsibility;
