'use client'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ComplianceCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade w-full"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-full">
          <div className="carousel-item h-[50vh] active">
            <div className="carousel-caption h-full d-md-block" style={{paddingBottom: 0, paddingTop: '6rem'}}>
              <div className="h-full flex flex-col justify-start items-center px-2 w-full">
                <h1 className="text-2xl text-cyan-200 mb-4">GDPR Compliance</h1>
                <p className="text-cyan-700 text-lg">
                  Ensuring your organization adheres to the General Data
                  Protection Regulation (GDPR) requirements, protecting the
                  personal data of EU citizens.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item h-[50vh]">
            <div className="carousel-caption h-full d-md-block" style={{paddingBottom: 0, paddingTop: '6rem'}}>
              <div className="h-full flex flex-col justify-start items-center px-2 w-full">
                <h1 className="text-2xl text-cyan-200 mb-4">
                  HIPAA Compliance
                </h1>
                <p className="text-cyan-700 text-lg">
                  Implementing safeguards to ensure the confidentiality,
                  integrity, and availability of electronic protected health
                  information (ePHI) in compliance with the Health Insurance
                  Portability and Accountability Act (HIPAA).
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item h-[50vh]">
            <div className="carousel-caption h-full d-md-block" style={{paddingBottom: 0, paddingTop: '6rem'}}>
              <div className="h-full flex flex-col justify-start items-center px-2 w-full">
                <h1 className="text-2xl text-cyan-200 mb-4">
                  ISO 27001 Certification
                </h1>
                <p className="text-cyan-700 text-lg">
                  Assisting your organization in achieving ISO 27001
                  certification, demonstrating your commitment to information
                  security management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ComplianceCarousel;
