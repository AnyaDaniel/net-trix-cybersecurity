import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  cls: string;
  heading: string;
}

const PlatformCard = ({ src, title, description, cls, heading }: Props) => {
  return (
    <div className={cls}>
      <p className="text-gray-200 text-md py-2 text-center">{heading}</p>
      <div className="flex items-center justify-center w-full">
        <Image src={src} alt={title} width={150} height={150} className="" />
      </div>
      <div className="py-4 px-10 text-center">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default PlatformCard;
