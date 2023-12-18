import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import {
  AiOutlineUser,
  AiOutlineCar,
  AiOutlineSafety,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsSuitcase2Fill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { HiIdentification } from "react-icons/hi";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { GiPillow } from "react-icons/gi";
import { BiLogoAngular } from "react-icons/bi";

export default function CarCard({classNames}:any) {
  return (
    <div className={`w-full h-full border-2 gap-10 flex flex-col shadow-lg p-6 ${classNames}`}>
      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-orange-500">Ekonomik Kiralık Araç</h1>
          <p className="text-xl font-bold">Fiat Egea</p>
        </div>
        <div>
          <Button className="md:col-span-1 col-span-3 bg-orange-600 rounded-full text-white p-4">
            Hemen Kirala
          </Button>
        </div>
      </div>
      <div className="w-full relative flex justify-center items-center">
        <Image
          src="/assets/fiat-egea.png"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-6 flex">
        <div className="w-1/2 pr-4 border-r-2">
          <h2 className="flex items-center mb-4 font-bold ">
            Araç Özellikleri:
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center ">
              <FaUsers className="mr-2" /> 5 Yetişkin
            </li>
            <li className="flex items-center">
              <BsSuitcase2Fill className="mr-2" /> 2 Büyük Bavul
            </li>
            <li className="flex items-center">
              <GiPillow className="mr-2" /> Yolcu Airbag
            </li>
            <li className="flex items-center">
              <BiLogoAngular className="mr-2" /> ABS
            </li>
            <li className="flex items-center">
              {" "}
              <BsFillFuelPumpFill className="mr-2" /> Dizel/Benzin
            </li>
            <li className="flex items-center">
              {" "}
              <GiGearStickPattern className="mr-2 font-bold" /> Manuel
            </li>
          </ul>
        </div>
        <div className="w-1/2 pl-4">
          <h2 className=" flex items-center font-bold mb-4">
            Kiralama Koşulları:
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              {" "}
              <FaCalendarAlt className="mr-2" /> 21 Yaş Ve Üstü
            </li>
            <li className="flex items-center">
              {" "}
              <HiIdentification className="mr-2" /> Ehliyet Yaşı 1 ve Üzeri
            </li>
            <li className="flex items-center">
              {" "}
              <BsCreditCard2FrontFill className="mr-2" /> 1 Kredi Kartı
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
