"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useState } from "react";
import { rentalCarFeatures } from "@/constants/cars";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import RentalScreen from "@/components/RentalScreen";

export default function CarDetail({ params }: any) {
  const id = params.id[0];
  const car = rentalCarFeatures.find((car) => car.id == id);
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">{car && car.subtitle}</h1>
        <h2 className="text-lg text-white font-bold">{car && car.title}</h2>
      </div>
      <div className="flex flex-col items-center justify-center p-2 w-4/5 self-center">
        <img
          src={car && car.image}
          alt="logo"
          width={500}
          height={500}
          className="border-2 border-slate-500 w-full object-fill"
        />
        <p className="w-full md:p-5 max-md:line-clamp-6">
          {car && car.description}
        </p>
        <div className="flex md:flex-row flex-col items-start justify-between md:w-2/3 w-full bg-slate-100 border-2 p-2 self-center max-md:gap-5">
          <div className="pr-4">
            <h2 className="flex items-center mb-4 font-bold ">
              Araç Özellikleri:
            </h2>
            <ul className="flex flex-col gap-2">
              {car &&
                car.vehicle_features.map((feature: any, index: any) => (
                  <li className="flex items-center " key={index}>
                    {feature.icon} {feature.text}
                  </li>
                ))}
            </ul>
          </div>
          <div className="pl-4">
            <h2 className=" flex items-center font-bold mb-4">
              Kiralama Koşulları:
            </h2>
            <ul className="flex flex-col gap-2">
              {car &&
                car.rental_conditions.map((feature: any, index: number) => (
                  <li className="flex items-center " key={index}>
                    {feature.icon} {feature.text}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <Button
          className="w-full bg-orange-600 rounded-full text-white p-4 my-4 self-start"
          onClick={() => {
            setClicked(true);
          }}
        >
          Hemen Kirala
        </Button>
      </div>
      {clicked && <RentalScreen setclicked={setClicked} id={car&&car.id} />}
    </div>
  );
}
