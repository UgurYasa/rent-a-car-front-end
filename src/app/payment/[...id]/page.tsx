"use client";
import CarCard from "@/components/CarCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { rentalCarFeatures } from "@/constants/cars";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Payment({ params }: any) {
  const id = params.id[0];
  const day = params.id[1];
  const amount = params.id[2];
  const car = rentalCarFeatures.find((car) => car.id == id);
  const router = useRouter();
  return (
    <div className="flex flex-col bg-slate-200">
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">Ödeme</h1>
      </div>
      <div className="flex flex-col p-5 w-full items-center">
        <p className="text-xl text-orange-500 w-4/5">{car && car.subtitle}</p>
        <p className="text-lg text-slate-500 w-4/5">{car && car.title}</p>
        <img src={car && car.image} alt="logo" className="w-4/5 self-center" />
      </div>
      <div className="flex md:flex-row flex-col max-md:w-4/5 max-md:p-4 md:items-center items-start justify-around gap-1 border[1px] self-center">
        <p className="font-bold text-lg">
          Kiralanacak Gün Sayısı : <span>{day}</span>
        </p>
        <p className="font-bold text-lg">
          Ödenecek Tutar : <span>{amount}</span> TL
        </p>
      </div>
      <div className="flex flex-col p-5 w-full items-center gap-3">
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Ad Soyad</p>
          <input
            type="text"
            placeholder="Ad Soyad"
            className="border-[1px] p-2"
          />
          <p>Kredi kartı üzerinde yazan ad soyad</p>
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Kredi Kartı Numarası</p>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="border-[1px] p-2"
          />
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Son Kullanma Tarihi</p>
          <input type="text" placeholder="AA/YY" className="border-[1px] p-2" />
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">CVV</p>
          <input type="text" placeholder="***" className="border-[1px] p-2" />
          <p>Kartın arkasındaki kod</p>
        </div>
      </div>
      <div className="flex p-5 w-4/5 self-center justify-end">
        <Button
          className="px-4 py-1 border-2 border-slate-500 w-40 rounded-xl text-center md:my-4 my-2 max-md:w-full"
          onClick={() => {
            alert("Ödeme Başarılı");
            router.push("/");
          }}
        >
          Ödeme Yap
        </Button>
      </div>
    </div>
  );
}
