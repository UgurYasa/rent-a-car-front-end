import { Image } from "@nextui-org/react";
import React, { useState } from "react";

export default function NewCard({
  imageUrl,
  buttonText,
  title,
  subtitle,
}: {
  imageUrl: string;
  buttonText: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col  h-full items-center md:p-6 p-2 w-full border-2">
      <div className="overflow-hidden inline-block md:h-3/5 h-full w-full bg-red-700">
        <img
          src={imageUrl}
          alt="A beautiful image showcasing our service"
          className="w-full h-full  hover:scale-110 duration-500 transition-transform"
        />
      </div>
      <div className="w-full md:h-2/5 h-full line-clamp-2 border-[1px] border-solid my-2 border-[#e1ded9] flex flex-col items-center justify-between">
        <div className="w-full">
          <p className="text-center my-4 text-[#ed5505]">{title}</p>
          <p className="mx-10 text-[18px] font-bold mb-4 overflow-hidden">
            {subtitle}
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-orange-500 text-white p-2 w-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
