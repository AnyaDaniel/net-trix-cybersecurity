import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
}

const SoltionCard = ({src, title, description} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg shadow-[#2A0E61]/50 bg-[#2A0E6117] backdrop-blur-md border border-[#2A0E61] w-full'>
        <div className="flex items-center justify-center w-full h-full/2 py-3">
        <Image src={src} alt={title} width={150} height={150} className=''/>
        </div>
        <div className="relative p-4">
            <h2 className='text-2xl font-semibold text-white'>{title}</h2>
            <p className="mt-2 text-gray-300">{description}</p>
        </div>
    </div>
  )
}

export default SoltionCard