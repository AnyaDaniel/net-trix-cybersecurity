import React from "react";

const ComplianceCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption d-none d-md-block p-10">
              <h1 className="text-2xl text-cyan-200 mb-5">GDPR Compliance</h1>
              <p className="text-cyan-700 text-lg">
                Ensuring your organization adheres to the General Data
                Protection Regulation (GDPR) requirements, protecting the
                personal data of EU citizens.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block p-10">
              <h1 className="text-2xl text-cyan-200 mb-5">HIPAA Compliance</h1>
              <p className="text-cyan-700 text-lg">
                Implementing safeguards to ensure the confidentiality,
                integrity, and availability of electronic protected health
                information (ePHI) in compliance with the Health Insurance
                Portability and Accountability Act (HIPAA).
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block p-10">
              <h1 className="text-2xl text-cyan-200 mb-5">
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
