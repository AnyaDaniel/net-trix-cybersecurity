import DataProtection from '@/components/about/main/DataProtection'
import DataResponsibility from '@/components/about/main/DataResponsibility'
import Hero from '@/components/about/main/Hero'
import Solution from '@/components/main/Solution'
import ProjectParallax from '@/components/sub/ProjectParallax'
import React from 'react'

const About = () => {
  return (
    <div>
      <Hero/>
      <DataProtection/>
      <ProjectParallax/>
      <DataResponsibility/>
      <Solution num='02.'/>
    </div>
  )
}

export default About