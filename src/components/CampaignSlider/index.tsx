import React from "react";
import Location from "../Location";
import Date from "../Date";

export default function CampaignSlider({
  click,
  setclick,
}: {
  click: boolean;
  setclick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" bg-[#00285F]  flex flex-col justify-evenly items-center p-5 2xl:px-32 pb-0 w-full">
      <button
        onClick={() => {
          setclick(!click);
        }}
        className="xl:hidden block self-start text-white font-bold text-3xl hover:underline hover:scale-105 p-5"
      >
        {click ? "X" : "Araç Kirala"}
      </button>
      <div
        className={`flex xl:flex-row flex-col w-full gap-10 md:px-5 justify-between xl:items-center items-start ${
          click ? "block" : "xl:block hidden"
        }`}
      >
        <div className="flex 2xl:flex-row flex-col max-2xl:w-full md:gap-10 ">
          <Location label="Teslim Alma Ofisi" placeHolder="Alış Ofisi Seç" />
          <Date label="Alış Tarihi" />
        </div>
        <div className="flex 2xl:flex-row flex-col max-2xl:w-full md:gap-10 ">
          <Location label="İade Etme Ofisi" placeHolder="İade Ofisi Seç" />
          <Date label="İade Tarihi" />
        </div>
      </div>
      <div className="  bg-[#00285F] flex md:flex-row flex-col justify-between items-center md:p-10 p-5 mx-10 md:h-auto h-40 relative w-full">
        <p className="text-white text-base hover:text-[#ed5505] hover:cursor-pointer uppercase flex flex-row md:justify-start justify-between items-center w-full gap-2">
          Qualizto İNDİRİM KODU <span className="md:block hidden">&gt;</span>
          <span className="md:hidden block">&#x2193;</span>
        </p>
        <div className="md:hidden block border-b-[1px] border-gray-400 w-full" />
        <button className="bg-[#ed5505]  rounded-full text-white text-base py-4  w-full self-center px-8">
          2 GÜN KİRALA &gt;
        </button>
      </div>
    </div>
  );
}
