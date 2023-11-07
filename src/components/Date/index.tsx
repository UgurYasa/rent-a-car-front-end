import React from "react";

export default function Date() {
  return (
    <div className="w-full h-auto  flex flex-row items-center my-5">
      <div className="border-r-2 border-[#ed5505]  h-20 ml-3" />
      <p className="text-white text-base mx-5 font-extralight">
        Alış
        <br />
        Tarihi
      </p>
      <div className="flex flex-row items-center text-center text-white bg-[#000E21] p-2 mr-5  h-20">
        <div className="text-4xl mr-3">07</div>
        <div className="flex flex-col text-lg">
          <p>SA</p>
          <p>KAS</p>
        </div>
      </div>
      <div className="flex flex-row items-center text-center text-white bg-[#000E21] p-2  h-20">
        <div className="text-4xl mr-3">09</div>
        <div className="flex flex-col text-lg">
        :00
        </div>
      </div>
    </div>
  );
}
