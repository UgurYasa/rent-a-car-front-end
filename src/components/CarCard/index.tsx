import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import CampaignSlider from "../CampaignSlider";

export default function CarCard({ classNames, car }: any) {
  const [isShow, setIsShow] = useState(false);
  const [click, setClick] = useState(false);

  return (
    <div
      className={`w-full h-full border-2 gap-10 flex flex-col shadow-lg p-6 ${classNames}`}
    >
      <div className="flex lg:flex-row flex-col justify-between">
        <div>
          <h1 className="text-orange-500">{car.subtitle}</h1>
          <p className="text-xl font-bold">{car.title}</p>
        </div>
        <div>
          <Button
            className="md:col-span-1 col-span-3 bg-orange-600 rounded-full text-white p-4"
            onClick={() => {
              setIsShow(true);
            }}
          >
            Hemen Kirala
          </Button>
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center">
        <img src={car.image} alt="logo" width={500} height={500} />
      </div>
      <div className="mt-6 flex">
        <div className="w-1/2 pr-4 border-r-2">
          <h2 className="flex items-center mb-4 font-bold ">
            Araç Özellikleri:
          </h2>
          <ul className="flex flex-col gap-2">
            {car.vehicle_features.map((feature: any, index: any) => (
              <li className="flex items-center " key={index}>
                {feature.icon} {feature.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className=" flex items-center font-bold mb-4">
            Kiralama Koşulları:
          </h2>
          <ul className="flex flex-col gap-2">
            {car.rental_conditions.map((feature: any, index: number) => (
              <li className="flex items-center " key={index}>
                {feature.icon} {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isShow &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex flex-col max-h-screen max-w-full items-center justify-center bg-black/60"
            onClick={() => setIsShow(false)}
          >
             
               <div className="flex w-1/2 justify-end px-10">
               <IoCloseCircleOutline
                className="h-6 w-6 cursor-pointer lg:h-10 lg:w-10 text-orange-400 "
                onClick={() => setIsShow(false)}
              />
</div>
            <div className=" m-2 flex w-full min-w-[50%]  max-w-[400px] flex-col gap-4 overflow-auto rounded-xl bg-white px-4 py-2 lg:w-1/2 lg:gap-7 lg:rounded-[48px] lg:px-8 lg:py-8">
             
              <div className="flex md:flex-row flex-col items-center justify-between">
                <p>Kiramalama Yapmak İçin Seçim Yapınız</p>
                <div className="flex flex-row items-center max-md:justify-between max-md:w-full gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="md:text-2xl text-lg text-orange-600 font-bold">{car.subtitle}</p>
                    <p className="md:text-xl text-base font-semibold">{car.title}</p>
                  </div>
                  <img src={car.image} alt={car.title} className="w-28 h-28 object-contain" />
                </div>
              </div>
              <div className="relative min-h-[100px] w-full lg:min-h-[300px]"><CampaignSlider click={click} setclick={setClick}/></div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
