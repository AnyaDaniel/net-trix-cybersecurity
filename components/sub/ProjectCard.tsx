import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
        <div className="flex items-center justify-center h-full/2 py-3">
        <Image src={src} alt={title} width={150} height={150} className=''/>
        </div>
        <div className="relative p-4">
            <h2 className='text-2xl font-semibold text-white'>{title}</h2>
            <p className="mt-2 text-gray-300">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard