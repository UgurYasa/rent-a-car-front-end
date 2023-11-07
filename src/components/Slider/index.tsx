import React from "react";
import Image from "next/image";
import Location from "../Location";
import Date from "../Date";

export default function Slider() {
  return (
    <div className="flex  items-center justify-center w-screen h-screen -mt-4 ">
      <div className="flex flex-col justify-end h-full w-full absolute">
        <div className="relative w-full h-full -ml-2">
          <Image
            src="/assets/homepage-bg.jpg"
            alt="bg"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full h-1/3 bg-gradient-to-t from-white to-blue-white absolute  -ml-2" />
      </div>

      <div className="flex  flex-col items-center justify-between h-1/2 w-full">
        <p className="absolute  text-3xl text-white font-bold -mt-24">
          Hayalindeki Maceralara Qualizto ile Başla!
        </p>
        <div className="w-1/2 bg-[#00285F] absolute flex flex-col justify-between">
          <div className="flex flex-row ">
            <Location />
            <Date/>
          </div>
          <div className="flex flex-row ">
            <Location />
            <Date/>
          </div>

          <div className="w-full  bg-[#001A3D] flex flex-row justify-between items-center p-10 ">
            <p className="text-white text-base hover:text-[#ed5505] hover:cursor-pointer uppercase">Qualizto İNDİRİM KODU &gt;</p>
            <button className="bg-[#ed5505] px-4 py-4 rounded-xl text-white text-xl ">
              2 GÜN KİRALA &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
