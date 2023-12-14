"use client";

import Card from "@/components/Card";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";

export default function Home() {
  const list = [
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
    {
      imageUrl: "'/assets/card-background.jpeg'",
      buttonText: "Detaylı Bilgi >",
    },
  ];
  return (
    <main>
      <Header />
      <Slider />
      <div className="grid md:grid-cols-3 grid-cols-1 md:ml-14 md:mt-20 md:mb-20 mt-24">
        {list.map((item: any, index: number) => (
          <Card
          key={index}
            imageUrl={item.imageUrl}
            buttonText={item.buttonText}
          />
        ))}
      </div>
      <Kvkk />

      <Footer />
    </main>
  );
}
