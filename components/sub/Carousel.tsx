'use client'

import React, { useState } from 'react';

import CarouselItem from './CarouselItem';
import CarouselIndicator from './CarouselIndicator';

import { IoIosArrowBack } from 'react-icons/io';

export interface CarouselProps {
  width?: number;
  height?: number;
  items: { id: number; component: React.ReactNode }[];
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => (prev + 1 < items.length ? prev + 1 : prev));
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }

  return (
    <div className="relative h-32 w-3/6 sm:h-40 md:h-56 carousel-container">
        {activeIndex > 0 && (
          <button
            className="right-1/2 bottom-0 translate-x-[-200px] translate-y-[-50%] transform sm:translate-x-[-250px] md:translate-x-[-300px] lg:translate-x-[-350px] absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-[#302e30] bg-[#181818] text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12"
            onClick={handlePrevItemBtn}
          >
            <IoIosArrowBack />
          </button>
        )}
        {items.map((item) => (
          <CarouselItem key={item.id} index={items.indexOf(item)} activeIndex={activeIndex}>
            {item.component}
          </CarouselItem>
        ))}
        {activeIndex < items.length - 1 && (
          <button
            className="bottom-0 left-1/2 translate-x-[200px] translate-y-[-50%] transform sm:translate-x-[250px] md:translate-x-[300px] lg:translate-x-[350px] absolute z-40 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-[#302e30] bg-[#181818] text-2xl opacity-75 transition duration-300 hover:opacity-100 md:h-12 md:w-12"
            onClick={handleNextItemBtn}
          >
            <IoIosArrowBack
              style={{
                transform: 'rotate(180deg)',
              }}
            />
          </button>
        )}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(index) => {
          index === items.length ? setActiveIndex(0) : setActiveIndex(index) ;
        }}
      />
    </div>
  );
}

