"use client";
import React from "react";
import Image from "next/image";
import Location from "../Location";
import Date from "../Date";

export default function Slider() {
  return (
    <div className="flex  items-center justify-center w-full h-screen -mt-4 ">
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

      <div className="flex  flex-col items-center justify-between h-1/2 w-full md:-mt-0 -mt-10">
        <p className="absolute md:text-3xl text-xl  text-white font-bold -mt-24 ">
          <span className="md:block hidden text-center">
            Hayalindeki Maceralara{" "}
            <span className="animate-pulse">Qualizto</span> ile Başla!
          </span>
          <span className="md:hidden block text-center">
            Hayalindeki Maceralara <br />{" "}
            <span className="animate-pulse">Qualizto</span> ile Başla!
          </span>
        </p>

        <div className=" bg-[#00285F] absolute flex flex-col justify-evenly items-center md:p-5 p-0 pb-0 md:w-auto w-[90vw]">
          <div className="flex md:flex-row flex-col w-full px-5">
            <div className="flex flex-col ">
              <Location
                label="Teslim Alma Ofisi"
                placeHolder="Alış Ofisi Seç"
              />
              <Location label="İade Etme Ofisi" placeHolder="İade Ofisi Seç" />
            </div>
            <div className="flex flex-col">
              <Date label="Alış Tarihi" />
              <Date label="İade Tarihi" />
            </div>
          </div>
          <div className="  bg-[#00285F] flex md:flex-row flex-col justify-between items-center md:p-10 p-5 mx-10 md:h-auto h-40 relative w-full">
            <p className="text-white text-base hover:text-[#ed5505] hover:cursor-pointer uppercase flex flex-row md:justify-start justify-between items-center w-full gap-2">
              Qualizto İNDİRİM KODU <span className="md:block hidden">&gt;</span><span className="md:hidden block">&#x2193;</span>
            </p>
            <div className="md:hidden block border-b-[1px] border-gray-400 w-full" />
            <button className="bg-[#ed5505]  rounded-full text-white text-base w-1/2 py-4 self-start ">
              2 GÜN KİRALA &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
