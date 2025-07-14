import {
  Fifth_client,
  First_client,
  Forth_client,
  Other_client,
  Second_client,
  Third_client,
} from "@/constants";
import React from "react";
import ClientsDataProvider from "../sub/ClientsDataProvider";
import ClientsText from "../sub/ClientsText";
import PartnerText from "../sub/PartnerText";

type ClientImage = {
  Image: string;
  width: number;
  height: number;
};

const Clients = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3 overflow-hidden w-full"
      style={{ transform: "scale(0.9)" }}
    >
      <ClientsText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {First_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Second_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Third_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Forth_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute bg-fixed">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover bg-fixed">
          <video
            className="w-full h-auto bg-fixed"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>

      <PartnerText />
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Fifth_client.map((image: ClientImage, index: number) => (
          <ClientsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
