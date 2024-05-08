"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";
import Select from "react-select"; // react-select kütüphanesini import edin
import { rentalCarTitles, rentalCarFeatures } from "@/constants/cars";
import { useRouter } from "next/navigation";


export default function Araclar({ params }: any) {
  var router = useRouter();
  const path = params.id ? params.id[0] : "kiralik-araclar";
  const route =
    path === "kiralik-araclar"
      ? rentalCarTitles[0]
      : path === "ekonomik-kiralik-arac"
      ? rentalCarTitles[1]
      : path === "konfor-kiralik-arac"
      ? rentalCarTitles[2]
      : path === "prestijli-kiralik-arac"
      ? rentalCarTitles[3]
      : path === "premium-kiralik-arac"
      ? rentalCarTitles[4]
      : path === "luks-kiralik-araclar"
      ? rentalCarTitles[5]
      : path === "van-kiralik-arac"
      ? rentalCarTitles[6]
      : rentalCarTitles[0];
  
  const [selectedTitle, setSelectedTitle] = useState({
    field: route,
    label: route,
  });

  useEffect(() => {
    var endpoint = "kiralık-araclar";
    if (selectedTitle && selectedTitle.label) {
      endpoint = selectedTitle.label
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("ş", "s")
        .replaceAll("ı", "i")
        .replaceAll("ğ", "g")
        .replaceAll("ü", "u")
        .replaceAll("ö", "o")
        .replaceAll("ç", "c");
    }

    router.push(`/araclar/${endpoint}`);
  }, [selectedTitle]);

  const options = rentalCarTitles.map((car:string) => ({
    value: car,
    label: car,
  }));

  const rentalCars =
    path === "kiralik-araclar"
      ? rentalCarFeatures
      : rentalCarFeatures.filter((car) => car.subtitle === route);

  return (
    <div>
      <Header />
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">{route}</h1>
      </div>
      <div className="w-full flex justify-center md:mb-0 mb-20 bg-[#00285f] px-5">
        <div className="xl:hidden bg-red-500 w-full">
          <Select
            options={options}
            value={selectedTitle}
            onChange={(selectedOption: any) => {
              if (selectedOption && selectedOption.value) {
                setSelectedTitle(selectedOption);
              }
            }}
            placeholder={selectedTitle.label}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full  justify-center mb-10 container gap-20  ">
        <table className=" hidden xl:block border-collapse  bg-[#00285f]">
          <thead>
            <tr>
              {rentalCarTitles.map((title, index) => (
                <th
                  key={index}
                  className={`py-2 px-10 text-white font-normal  ${
                    title === route ? "bg-orange-600" : "bg-[#00285f]"
                  } border-r hover:bg-orange-500 cursor-pointer`}
                  onClick={() => {
                    const endpoint = title
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("ş", "s")
                      .replaceAll("ı", "i")
                      .replaceAll("ğ", "g")
                      .replaceAll("ü", "u")
                      .replaceAll("ö", "o")
                      .replaceAll("ç", "c");

                    router.push(`/araclar/${endpoint}`);
                  }}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 mb-24 gap-8">
          {rentalCars.length > 0 ? (
            rentalCars.map((car: any, index: any) => (
              <CarCard car={car} key={index} />
            ))
          ) : (
            <p className="xl:col-span-3 col-span-2  h-full text-center md:text-4xl text-lg font-black">
              Bu kategoride araç bulunamadı 😵
            </p>
          )}
        </div>
      </div>
      
    </div>
  );
}
