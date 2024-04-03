"use client";
import React from "react";
import Image from "next/image";
import HomeSlider from "../HomeSlider";

export default function Slider() {
  return (
    <div className="flex  items-center justify-center w-full h-screen -mt-4">
      <div className="flex flex-col justify-end h-full w-full absolute">
        <div className="relative w-full h-full">
          <Image
            src="/assets/homepage-bg.jpg"
            alt="bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-1/3 bg-gradient-to-t from-white to-blue-white absolute" />
      </div>

    <HomeSlider/>
    </div>
  );
}
