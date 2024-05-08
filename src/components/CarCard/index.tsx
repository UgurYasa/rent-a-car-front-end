import React from "react";
import { Button } from "@nextui-org/react";

export default function CarCard({ classNames, car }: any) {
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
          <Button className="md:col-span-1 col-span-3 bg-orange-600 rounded-full text-white p-4">
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
            {car.vehicle_features.map((feature: any,index:any) => (
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
            {car.rental_conditions.map((feature: any,index:number) => (
              <li className="flex items-center " key={index}>
                {feature.icon} {feature.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
