"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";
import React, { useState } from "react";
import {
  QualiztoCampaigns,
  QualiztoCorporateCampaigns,
  OtherAdvantages,
  QualiztoCooperationAgreements,
} from "@/constants/campaigns";import CampaignSlider from "@/components/CampaignSlider";

export default function KampanyaDetail({params}:any) {
  const [click, setclick] = useState(false);
  const [show, setShow] = useState(false);
  const path= params.id.split("_")[0];
  const index=params.id.split("_")[1];

  
  
  const element = path === "qualizto-kampanyalari"
  ? QualiztoCampaigns[index]
  : path === "qualizto-kurumsal-kampanyalari"
  ? QualiztoCorporateCampaigns[index]
  : path === "diger-avantajlar"
  ? OtherAdvantages[index]
  : QualiztoCooperationAgreements[index]; 

  

  // const element = {
  //   title: "Seyahat",
  //   subtitle: "Online Ödeme’de %30 İndirim!",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, exercitationem.",
  //   location: [
  //     "Qualizto Adnan Menderes Havalimanı Ofisi",
  //     "Qualizto Karşıyaka Ofisi",
  //   ],
  //   buttonText: "Kampanya koşulları:",
  //   imageUrl: "/assets/card-background.jpeg",
  // };
  return (
    <div>
      <CampaignSlider click={click} setclick={setclick} />

      <div className="grid grid-cols-3 w-full h-auto my-2 xl:px-36">
        <div className="md:col-span-2 col-span-3 h-auto xl:mx-5 p-10">
          <p className="my-2 text-xs">{element.title}</p>
          <p className="mb-6 font-bold text-xl">{element.subtitle}</p>
          <p className="mb-5">{element.description}</p>
          <ul className="px-10 mb-10 list-disc">
            {element.location.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <button
            className="text-black p-2 md:w-4/6 w-full border-[1px] my-2 flex items-center justify-between px-10"
            onClick={() => {
              setShow(!show);
            }}
          >
            {element.detailButtonText}
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
        <div className="md:col-span-1 col-span-3 px-10 self-center">
          <img src={element.imageUrl} alt="img" />
        </div>
      </div>
      <Kvkk />
    </div>
   
  );
}
