"use client";
import DataProtection from '@/components/about/main/DataProtection'
import DataResponsibility from '@/components/about/main/DataResponsibility'
import Hero from '@/components/about/main/Hero'
import CarouselSection from '@/components/main/CarouselSection'
import Clients from '@/components/main/Clients'
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import Solution from '@/components/main/Solution'
import ProjectParallax from '@/components/sub/ProjectParallax'
import { Parallax } from "@react-spring/parallax";
import React from 'react'

const About = () => {
  return (
    <div>
      <Parallax pages={10}>
      <Navbar/>
      <Hero/>
      <DataProtection/>
      <ProjectParallax/>
      <DataResponsibility/>
      <Solution num='02.'/>
      <Clients/>
      <CarouselSection/>

      <Footer/>
      </Parallax>
    </div>
  )
}

export default About