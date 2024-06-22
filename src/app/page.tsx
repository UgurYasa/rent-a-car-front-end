"use client";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";
import { useQuery } from "@tanstack/react-query";
import { getCarImages } from "@/services/carImages";
import { getBrand } from "@/services/brand";
import { getCars } from "@/services/cars";
import { getColor } from "@/services/color";
import { getCustomer } from "@/services/customer";
import { getRentals } from "@/services/rentals";
import NewCard from "@/components/NewCard";
import Link from "next/link";
import { CAMPAIGNS } from "@/constants/home-campaigns";
import Breadcumbs from "@/components/Breadcumbs";


export default function Home() {
  // const { data: brandData, error: brandError } = useQuery<any, Error>(
  //   ["brand"],
  //   getBrand
  // );

  // const { data: carImagesData, error: carImagesError } = useQuery<any, Error>(
  //   ["carImages"],
  //   getCarImages
  // );

  // const { data: carsData, error: carsError } = useQuery<any, Error>(
  //   ["carsData"],
  //   getCars
  // );

  // const { data: colorData, error: colorError } = useQuery<any, Error>(
  //   ["colorData"],
  //   getColor
  // );

  // const { data: customerData, error: customerError } = useQuery<any, Error>(
  //   ["customerData"],
  //   getCustomer
  // );
  // const { data: rentalsData, error: rentalsError } = useQuery<any, Error>(
  //   ["rentalsData"],
  //   getRentals
  // );
  // console.log(brandData, brandError);
  // console.log(carImagesData, carImagesError);
  // console.log(carsData, carsError);
  // console.log(colorData, colorError);
  // console.log(customerData, customerError);
  // console.log(rentalsData, rentalsError);
  const list = ["AnaSayfa"];

  return (
    
    <main className="flex flex-col bg-slate-200">
      <Slider />
      <div className="w-full flex items-center justify-center max-md:my-20 max-md:px-5">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  md:w-5/6 w-full md:gap-8 gap-4">
          {CAMPAIGNS.map((item: any, index: number) => (
            <Link href="/kampanyalar/qualizto-kampanyalari" key={index}>
              <NewCard
                key={index}
                imageUrl={item.imageUrl}
                buttonText={item.buttonText}
                title={item.title}
                subtitle={item.subtitle}
              />
            </Link>
          ))}
        </div>
      </div>
      <Breadcumbs routes={list} />
      <Kvkk />
    </main>
  );
}
