import React from "react";

export default function Comment({ title, text }: any) {
  return (
    <div className="bg-gray-100 flex flex-col items-start justify-start container w-full h-[300px] md:m-8 p-8">
      <h1 className="font-bold text-xl m-2">{title}</h1>
      <p className="m-2">{text}</p>
    </div>
  );
}
