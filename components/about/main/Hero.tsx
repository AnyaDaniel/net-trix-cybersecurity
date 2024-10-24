import React from 'react'
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";

const Hero = () => {
  return (
    <div className='md:pt-60 md:px-40'>
        <div className="md:rounded-[50px] md:pr-20 md:pl-40 px-10 py-20 md:py-14 shadow-lg shadow-[#2A0E61]/50 bg-gradient-to-br from-[#030014] to-[#1b0d5ca5] backdrop-blur-md">
          <div className='ml-auto md:w-2/3'>
          <motion.h1 variants={slideInFromLeft(0.5)} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500  font-bold text-4xl md:text-6xl">Net-Trix Solutions</motion.h1 >
          <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-10 max-w-[600px]'> At the heart of our mission is ensuring that your organization thrives. We
            focus on aligning the right processes, technology, and people, allowing
            you to reach your business goals effortlessly. We take pride in easing
            your workload by providing solutions that empower you to focus on
            growth. Our commitment revolves around clear communication and a
            client-centric approach to streamline infrastructure deployment.</motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-14 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            style={{ textDecoration: "none", zIndex: 50 }}
            href='https://net-trixsolutions.com/' 
          >
            More about Net-Trix
          </motion.a>
          </div>
        </div>
        
    </div>
  )
}

export default Hero