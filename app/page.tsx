"use client";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Clients from "@/components/main/Clients";
import CarouselSection from "@/components/main/CarouselSection";
import Solution from "@/components/main/Solution";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { Parallax } from "@react-spring/parallax";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <StarsCanvas />
        <Parallax pages={15}>
          <Navbar />
          <Hero />
          <Projects />
          <Encryption />
          <Solution num="" />
          <Clients />
          <CarouselSection />
          <Footer />
        </Parallax>
      </div>
    </main>
  );
}
