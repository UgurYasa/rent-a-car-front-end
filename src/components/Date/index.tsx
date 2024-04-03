import React from "react";

export default function Date({ label }: any) {
  const list = label.split(" ");
  return (
    <div className="w-full h-auto  flex flex-row items-center my-5 md:justify-center">
      <div className="border-r-2 border-[#ed5505]  md:h-20 h-10 ml-3 md:block hidden" />
      <p className="text-white md:text-base text-xs md:mx-5 mx-3 font-extralight md:block hidden">
        {list[0]}
        <br />
        {list[1]}
      </p>
      <div className="flex  gap-5 w-full">
        <div className="flex flex-row items-center text-center justify-center text-white bg-[#000E21] p-5 h-20 w-full">
          <div className="md:text-4xl text-2xl mr-3">07</div>
          <div className="flex flex-col md:text-lg text-base">
            <p>SA</p>
            <p>KAS</p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center text-white bg-[#000E21] p-5 h-20 w-full">
          <div className="md:text-4xl text-2xl mr-3">09</div>
          <div className="flex flex-col md:text-lg text-base">:00</div>
        </div>
      </div>
    </div>
  );
}
