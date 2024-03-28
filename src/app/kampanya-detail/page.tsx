"use client";
import Date from "@/components/Date";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";
import Location from "@/components/Location";
import React, { useState } from "react";

export default function KampanyaDetail() {
  const [click, setclick] = useState(false);
  const [show, setShow] = useState(false);

  const element = {
    title: "Seyahat",
    subtitle: "Online Ödeme’de %30 İndirim!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, exercitationem.",
    location: [
      "Qualizto Adnan Menderes Havalimanı Ofisi",
      "Qualizto Karşıyaka Ofisi",
    ],
    buttonText: "Kampanya koşulları:",
    imageUrl: "/assets/card-background.jpeg",
  };
  return (
    <div>
      <Header />
      <div className=" bg-[#00285F]  flex flex-col justify-evenly items-center p-5 xl:px-16 pb-0 w-full">
        <button
          onClick={() => {
            setclick(!click);
          }}
          className="xl:hidden block self-start text-white font-bold text-3xl hover:underline hover:scale-105 p-5"
        >
          {click ? "X" : "Araç Kirala"}
        </button>
        <div
          className={`flex xl:flex-row flex-col w-full md:px-5 justify-between xl:items-center items-start ${
            click ? "block" : "xl:block hidden"
          }`}
        >
          <div className="flex xl:flex-row flex-col ">
            <Location label="Teslim Alma Ofisi" placeHolder="Alış Ofisi Seç" />
            <Date label="Alış Tarihi" />
          </div>
          <div className="flex xl:flex-row flex-col">
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

      <div className="grid grid-cols-3 w-full h-auto my-2 ">
        <div className="xl:col-span-2 col-span-3 h-auto xl:mx-5 p-10">
          <p className="my-2 text-xs">{element.title}</p>
          <p className="mb-6 font-bold text-xl">{element.subtitle}</p>
          <p className="mb-5">{element.description}</p>
          <ul className="px-10 mb-10 list-disc">
            {element.location.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button
            className="text-black p-2 xl:w-4/6 w-full border-[1px] my-2 flex items-center justify-between px-10"
            onClick={() => {
              setShow(!show);
            }}
          >
            {element.buttonText}
            {show ?<span>&#8896;</span> : <span>&#8897;</span>}
          </button>
          <ul className={`${show ? "block" : "hidden"} transition-all border-[1px] xl:w-4/6 w-full`}>
            {element.location.map((item, index) => (
              <li  key={index} className="px-10 py-2 ">
                {item}
              </li>
            ))}
          </ul>   

        </div>
        <div className="xl:col-span-1 col-span-3 px-10 self-center">
          <img src={element.imageUrl} alt="img" />
        </div>
      </div>
      <Kvkk />
      <Footer />
    </div>
  );
}
