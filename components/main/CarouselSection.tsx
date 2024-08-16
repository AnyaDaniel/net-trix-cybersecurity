import React from 'react'
import Image from 'next/image';

import Carousel from '../sub/Carousel';

const imagesItems = [
  { id: 1, component: <Image width={1500} height={1000} src='/card1.svg' alt="teste" /> },
  { id: 2, component: <Image width={1500} height={1000} src='/card2.svg' alt="teste" /> },
  { id: 3, component: <Image width={1500} height={1000} src='/card3.svg' alt="teste" /> },
  { id: 4, component: <Image width={1500} height={1000} src='/card4.svg' alt="teste" /> },
  { id: 5, component: <Image width={1500} height={1000} src='/card1.svg' alt="teste" /> }, // Duplicate component but unique ID
];


const CarouselSection = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white flex flex-row items-center justify-center z-[10]"><Carousel items={imagesItems} /></div>
  )
}

export default CarouselSection