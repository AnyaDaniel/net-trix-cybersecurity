"use client";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Choose = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js" as any);
  }, []);

  return (
    <div className="py-10 ">
      <h1 className="text-white pb-2 md:pb-5 pl-5 md:pl-24">Why Choose Us</h1>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade w-screen relative "
        data-bs-ride="carousel"
      >
        <div
          className="carousel-indicators m-0 top-0 left-0 md:w-1/2 z-10"
          style={{
            paddingLeft: "6.2rem",
            paddingTop: "1rem",
            paddingRight: "1rem",
          }}
        >
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderTop: "0",
              borderBottom: "0",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderTop: "0",
              borderBottom: "0",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderTop: "0",
              borderBottom: "0",
            }}
          ></button>
        </div>
        <button
          className="carousel-control-prev control"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next control ml-14"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-inner md:px-20 ">
          <div
            className="carousel-item active flex flex-col-reverse md:flex-row w-full items-center justify-center bg-[#1f293738] rounded-md"
            style={{ display: "flex" }}
          >
            <div className="w-full md:w-1/2 md:px-10 px-4">
              <div className="pt-2 pb-5 md:py-5 text-gray-300">
                <h1 className="">24/7 Monitoring</h1>
                <p className="pt-2 md:max-w-[450px]">
                  Around-the-clock vigilance to detect and neutralixe threats before they impact your operations.
                </p>
              </div>
            </div>
            <div className="bg-cover w-full md:w-1/2 h-[300px] bg-[url('/opcenter.jpg')]"></div>
          </div>
          <div
            className="carousel-item flex flex-col-reverse md:flex-row w-full items-center justify-center bg-[#1f293738] rounded-md"
            style={{ display: "flex" }}
          >
            <div className="w-full md:w-1/2 md:px-10 px-4">
              <div className="pt-2 pb-5 md:py-5 text-gray-300">
                <h1 className="">Expertise</h1>
                <p className="pt-2 md:w-[450px]">
                  Our team of certified professionals brings years of experience in protecting businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="bg-cover w-full md:w-1/2 h-[300px] bg-[url('/chooseimg.jpg')]"></div>
          </div>
          <div
            className="carousel-item flex flex-col-reverse md:flex-row w-full items-center justify-center bg-[#1f293738] rounded-md"
            style={{ display: "flex" }}
          >
            <div className="w-full md:w-1/2 md:px-10 px-4">
              <div className="pt-2 pb-5 md:py-5 text-gray-300">
                <h1 className="">Customized Solutions</h1>
                <p className="pt-2 md:w-[450px]">
                  Tailored security strategies that fit the unique needs of your business.
                </p>
              </div>
            </div>
            <div className="bg-cover w-full md:w-1/2 h-[300px] bg-[url('/chooseimgtwo.jpg')]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
