import Image from 'next/image';
import React from 'react'

interface Props {
    src: string;
    title: string;
    description: string;
    cls: string;
}

const ProjectCard = ({src, title, description, cls} : Props) => {
  return (
    <div className={cls}>
        <div className="flex items-center justify-center w-full h-full/2 py-3">
        <Image src={src} alt={title} width={150} height={150} className=''/>
        </div>
        <div className="p-4">
            <h2 className='text-2xl font-semibold text-white'>{title}</h2>
            <p className="mt-2 text-gray-300">{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard