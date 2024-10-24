'use client'

import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Carousel = () => {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js" as any);
      }, []);
  return (
    <div>
        <div
        id="carouselExampleIndicatorstwo"
        className="carousel slide carousel-fade w-screen relative "
        data-bs-ride="carousel"
      >

        <div className="md:w-2/3 mr-auto">
            <div className="flex justify-center text-right ">
                
                <div className="carousel-inner md:px-20 bg-[#0300144b] pt-10 md:pt-60 pb-10">
                <p className='px-4 md:px-5 text-gray-500'>SERVICES</p>
                    <div
                        className="carousel-item active w-full"
                        style={{ display: "flex" }}
                    >
                        <div className="w-full md:px-10 px-4">
                        <div className="pb-5 md:py-5 text-gray-300">
                        <h1 className="text-6xl font-thin mb-5 text-gray-400">01.</h1>
                            <h1 className="md:w-2/3 ml-auto">CYBERSECURITY AWARENESS
                            AND TRAINING</h1>
                            <p className="pt-3 pb-5 md:w-2/3 ml-auto text-xl">
                            Human error is one of the leading causes of
                            data breaches. We offer training programs to
                            educate your employees on best practices for
                            cybersecurity.
                            </p>
                            <a
                                className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                                style={{ textDecoration: "none" }}
                                href='/services#training'
                            >
                                See More
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="carousel-item w-full"
                    style={{ display: "flex" }}
                >
                    <div className="w-full md:px-10 px-4">
                    <div className="pb-5 md:py-5 text-gray-300">
                    <h1 className="text-6xl font-thin mb-5 text-gray-400">02.</h1>
                        <h1 className="md:w-2/3 ml-auto">Cybersecurity Solutions</h1>
                        <p className="pt-3 pb-5 md:w-2/3 ml-auto text-xl">
                        Cybersecurity threats are ever-evolving, and so are our solutions. We provide
                        a range of services to keep your IT infrastructure secure.
                        </p>
                        <a
                            className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            See More
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    className="carousel-item w-full"
                    style={{ display: "flex" }}
                >
                    <div className="w-full md:px-10 px-4">
                    <div className=" pb-5 md:py-5 text-gray-300">
                    <h1 className="text-6xl font-thin mb-5 text-gray-400">03.</h1>
                        <h1 className="md:w-2/3 ml-auto">Compliance and Risk
                        Management</h1>
                        <p className="pt-3 pb-5 md:w-2/3 ml-auto text-xl">
                        Compliance with data protection
                        regulations is essential for
                        avoiding legal penalties and
                        maintaining customer trust.
                        </p>
                        <a
                            className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            See More
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    className="carousel-item w-full"
                    style={{ display: "flex" }}
                >
                    <div className="w-full md:px-10 px-4">
                    <div className=" pb-5 md:py-5 text-gray-300">
                    <h1 className="text-6xl font-thin mb-5 text-gray-400">04.</h1>
                        <h1 className="md:w-2/3 ml-auto">Incident Response and
                        Management</h1>
                        <p className="pt-3 pb-5 md:w-2/3 ml-auto text-xl">
                        In the event of a cyber incident, a quick and
                        effective response is critical.
                        </p>
                        <a
                            className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            See More
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    className="carousel-item w-full"
                    style={{ display: "flex" }}
                >
                    <div className="w-full md:px-10 px-4">
                    <div className=" pb-5 md:py-5 text-gray-300">
                    <h1 className="text-6xl font-thin mb-5 text-gray-400">05.</h1>
                        <h1 className="md:w-2/3 ml-auto">SECURITY OPERATIONS CENTER</h1>
                        <p className="pt-3 pb-5 md:w-2/3 ml-auto text-xl">
                        We envision a digital world
                        where businesses can
                        operate securely and
                        efficiently, free from the
                        constant threat of cyber
                        attacks. Our goal is to be
                        the leading provider of SOC
                        services, recognized for
                        our innovation, expertise,
                        and commitment to client
                        security.
                        </p>
                        <a
                            className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                            style={{ textDecoration: "none" }}
                            href=''
                        >
                            See More
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="bg-[#030014] md:p-[3rem] w-[50px] relative">
                    <div className="previous">
                    <button
                    className="carousel-control-prev about-control control"
                    type="button"
                    data-bs-target="#carouselExampleIndicatorstwo"
                    data-bs-slide="prev"
                    >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    </div>
                    <div className="next">
                    <button
                    className="carousel-control-next about-control control"
                    type="button"
                    data-bs-target="#carouselExampleIndicatorstwo"
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
            </div>
        </div>
      </div>
        
    </div>
  )
}

export default Carousel