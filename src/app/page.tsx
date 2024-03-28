"use client";

import Card from "@/components/Card";
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

export default function Home() {
  const { data: brandData, error: brandError } = useQuery<any, Error>(
    ["brand"],
    getBrand
  );

  const { data: carImagesData, error: carImagesError } = useQuery<any, Error>(
    ["carImages"],
    getCarImages
  );

  const { data: carsData, error: carsError } = useQuery<any, Error>(
    ["carsData"],
    getCars
  );

  const { data: colorData, error: colorError } = useQuery<any, Error>(
    ["colorData"],
    getColor
  );

  const { data: customerData, error: customerError } = useQuery<any, Error>(
    ["customerData"],
    getCustomer
  );
  const { data: rentalsData, error: rentalsError } = useQuery<any, Error>(
    ["rentalsData"],
    getRentals
  );

  console.log(brandData, brandError);
  console.log(carImagesData, carImagesError);
  console.log(carsData, carsError);
  console.log(colorData, colorError);
  console.log(customerData, customerError);
  console.log(rentalsData, rentalsError);

  const list = [
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"Online Ödeme’de %30 İndirim!"
    },
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"Qualizto Müşterileri İstanbul’da Tek Yön Ücreti Ödemiyor!"
    },
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"Qualizto Manisa Ofisinden aracınızı kiralayın tek yön ücretini ödemeyin"
    },
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"İzmirlilerin Tek Yön Ücreti Budget’tan!"
    },
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"İstanbulluların Tek Yön Ücreti Budget’tan!"
    },
    {
      imageUrl: "/assets/card-background.jpeg",
      buttonText: "Detaylı Bilgi >",
      title:"Seyahat",
      description:"Qualizto'da Antalyada Çalışanları Fırsatlar Bekliyor!"
    },
  ];  
  return (
    <main>
      <Header />
      <Slider />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:ml-14 md:mt-20 md:mb-20 mt-24 gap-8">
        {list.map((item: any, index: number) => (
        <Link href="/kampanyalar" key={index}>
          <NewCard
            key={index}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
            title={item.title}
            description={item.description}
          />
        </Link>
        ))}
      </div>
      <Kvkk />
      <Footer />
    </main>
    
  );
}
