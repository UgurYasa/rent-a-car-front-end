"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";
import NewCard from "@/components/NewCard";
import Link from "next/link";
import React from "react";

export default function Kampanyalar() {
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
   
  ];  
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-28 bg-gradient-to-b from-orange-600 to-orange-400 xl:text-3xl lg:text-2xl text-lg font-black text-white">
        Qualizto Araç Kiralama Kampanyaları
      </div>
      <div className="flex md:flex-row md:w-5/6 flex-col w-full mx-auto bg-[#001a3d] md:h-20 h-auto items-center gap-5 text-white pl-5 max-md:py-5">
        <p className="hover:bg-gradient-to-b hover:from-orange-600 hover:to-orange-400 cursor-pointer hover:h-20 text-center items-center justify-center flex">Qualizto Kampanyaları</p>
        <div className="border-r-[1px] border-white  h-10 max-md:hidden" />
        <p className="hover:bg-gradient-to-b hover:from-orange-600 hover:to-orange-400 cursor-pointer hover:h-20 text-center items-center justify-center flex">Qualizto Kurumsal Kampanyaları</p>
        <div className="border-l-[1px] border-white h-10 max-md:hidden" />
        <p className="hover:bg-gradient-to-b hover:from-orange-600 hover:to-orange-400 cursor-pointer hover:h-20 text-center items-center justify-center flex">Diğer Avantajlar</p>
        <div className="border-l-[1px] border-white h-10 max-md:hidden" />
        <p className="hover:bg-gradient-to-b hover:from-orange-600 hover:to-orange-400 cursor-pointer hover:h-20 text-center items-center justify-center flex">Qualizto İş Birliği Anlaşmaları</p>
        <div className="border-l-[1px] border-white h-10 max-md:hidden" />
      </div>

      <div className="flex md:flex-row flex-col md:w-5/6 mx-auto  h-20 items-center justify-between max-md:mb-5">
        <div className="flex flex-row items-center gap-2">
          <p>Kategori Seç:</p>
          <p className="hover:cursor-pointer text-sm font-semibold">Tüm Kategoriler (5) <span className="text-[10px]">&#8897;</span></p>
          
        </div>
        <div className="flex flex-row items-center gap-2 text-white">
          <button className="px-[14px] py-[6px] bg-[#001a3d] hover:bg-orange-400">TÜMÜ(5)</button>
          <button className="px-[14px] py-[6px] bg-[#001a3d] hover:bg-orange-400">Yurtiçi(5)</button>
          <button className="px-[14px] py-[6px] bg-[#001a3d] hover:bg-orange-400">Yurtdışı(5)</button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-md:px-5">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-1 md:w-5/6 w-full border-t-[1px]">
        {list.map((item: any, index: number) => (
          <Link href="/kampanya-detail" key={index}>
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
      </div>
      <Kvkk />
      <Footer/>
    </div>
  );
}