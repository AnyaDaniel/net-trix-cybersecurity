import React from 'react'
import type { NextPage } from 'next';
import Image from 'next/image';

import Carousel from '../sub/Carousel';

const imagesItems = [
  <Image className="" width={1500} height={1000} src='/card1.svg' alt="teste" />,
  <Image className="" width={1500} height={1000} src='/card2.svg' alt="teste" />,
  <Image className="" width={1500} height={1000} src='/card3.svg' alt="teste" />,
  <Image className="" width={1500} height={1000} src='/card4.svg' alt="teste" />,
  <Image className="" width={1500} height={1000} src='/card1.svg' alt="teste" />,
];

const CarouselSection = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white flex flex-row items-center justify-center"><Carousel items={imagesItems} /></div>
  )
}

export default CarouselSection