"use client";

import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-cols-3 ml-14 mt-20 mb-20">
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
        <Card
          imageUrl="'/assets/card-background.jpeg'"
          buttonText="Detaylı Bilgi >"
        />
      </div>
      <Kvkk />

      <Footer />
    </main>
  );
}
