import { Image } from "@nextui-org/react";
import React from "react";

export default function NewCard({
  imageUrl,
  buttonText,
  title,
  description
}: {
  imageUrl: string;
  buttonText: string;
  title:string;
  description:string;
}) {
  return (
    <div className="flex flex-col  h-full items-center md:p-6 p-2 w-full">
      <Image
        isZoomed
        className="w-full h-1/3 rounded-none "
        alt="Advantages"
        src={imageUrl}
      />
      <div className="w-full h-2/3 border-[1px] border-solid border-[#e1ded9] flex flex-col items-center justify-between">
        <div className="w-full">
          <p className="text-center my-4 text-[#ed5505]">{title}</p>
          <p className="mx-10 text-[18px] font-bold mb-4">{description}</p>
        </div>
        <button className="bg-blue-500 hover:bg-orange-500 text-white p-2 w-full">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
