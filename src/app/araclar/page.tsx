"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";
import Select from "react-select"; // react-select kütüphanesini import edin

export default function Araclar() {
  const rentalCarTitles = [
    "Kiralık Araçlar",
    "Ekonomik Kiralık Araç",
    "Konfor Kiralık Araç",
    "Prestijli Kiralık Araç",
    "Premium Kiralık Araç",
    "Lüks Kiralık Araçlar",
    "Van Kiralık Araç",
  ];

  const [selectedTitle, setSelectedTitle] = useState(null); // Seçili başlık için state

  const options = rentalCarTitles.map((title) => ({
    value: title,
    label: title,
  })); // react-select için seçenekleri hazırlayın

  return (
    <div>
      <Header />
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">Kiralık Araçlar</h1>
      </div>

      <div className="hidden md:flex w-full  justify-center mb-20">
        <table className="border-collapse  bg-[#00285f]">
          <thead>
            <tr>
              {rentalCarTitles.map((title, index) => (
                <th
                  key={index}
                  className="py-2 px-10 text-white font-normal bg-[#00285f] border-r hover:bg-orange-500"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>

      <div className="w-full flex justify-center mb-20 bg-[#00285f]">
        <div className="md:hidden bg-red-500">
          <Select
            options={options}
            value={selectedTitle}
            onChange={(selectedOption: any) => {
              if (selectedOption && selectedOption.value) {
                setSelectedTitle(selectedOption);
              } else {
                setSelectedTitle(null);
              }
            }}
            placeholder={options[0].label}
            className="w-96"
          />
        </div>
      </div>

      {/* Araç kartları */}
      <div className="grid md:grid-cols-3 grid-cols-1 mx-10 mb-32 gap-8">
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
}
