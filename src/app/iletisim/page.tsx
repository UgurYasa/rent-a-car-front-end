"use client";
import Comment from "@/components/Comment";
import Header from "@/components/Header";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import Kvkk from "@/components/Kvkk";

export default function Iletisim() {
  return (
    <div>
      <Header />
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center  mb-20 py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">İletişim Bilgileri</h1>
        <p className="text-white max-w-[800px] text-center">
          Sizlerden gelen her türlü geri bildirimi, ürün ve hizmetlerimizin
          kalitesinin ve iș süreçlerimizin iyileștirilmesini sağlayacak șekilde
          değerlendiriyor mükemmeli hedefleyerek müșteri odaklı bir yaklașım
          benimsiyoruz.
        </p>
      </div>
      <div className="grid xl:grid-cols-3  grid-cols-1  xl:px-[6rem] px-[1rem] gap-8  xl:mb-0 mb-10 ">
        <Comment
          title="Rezervasyonlarınız İçin"
          text="rez@qualizto.com.tr e-posta adresimizden veya hafta içi ve hafta sonu 09:00 - 19:00 saatleri arasında ise 222 22 222 numaralı hattımızdan 1’i tuşlayarak Rezervasyon Merkezimize ulaşabilirsin. wwww.qualizto.com web sitemizden rezervasyonlarınızı online olarak da gerçekleştirebilirsin. Yurt Dışı aramaları için numaramız + 90 (222) 222 2 222"
        />
        <Comment
          title="Müşteri İlişkileri"
          text="Her türlü öneri, talep, eleştiri ve yorumların için hafta içi 08:00 17:00 saatleri arasında 222 22 222 numaralı hattımızdan 3’ü tuşlayarak İletişim Merkezimizden, web sitemizde bulunan iletişim formumuz veya cs@qualizto.com.tr e-posta adresimiz aracılığıyla bize ulaşabilirsin."
        />
        <Comment
          title="Tam Destek Hattı"
          text="Arıza, kaza ve benzeri her türlü acil durumda 222 22 222 numaralı hattımızdan 2’yi tuşlayarak 7 gün 24 saat bizlere ulaşabilir ve yol yardım talep edebilirsin."
        />
      </div>
      <div className="grid xl:grid-cols-2  grid-cols-1  xl:mx-[6rem] mx-[1rem]">
        <div className="flex-col flex items-start justify-start gap-10 border-2 p-10 md:mx-10">
          <h1 className="text-orange-500 text-lg font-semibold">
            Genel Müdürlük
          </h1>
          <p>
            {" "}
            Ahmet Karadeniz Yerleşkesi, Trakya Üniversitesi, 22020 Merkez/Edirne
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0301801124383!2d26.621345476674364!3d41.63347908069364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b33abbe7844db5%3A0x9140bcc82181086!2sTrakya%20%C3%9Cn.%20M%C3%BChendislik%20Fakultesi!5e0!3m2!1str!2str!4v1702902675988!5m2!1str!2str"
            className="md:w-full md:h-[600px]  sm:w-full sm:h-[500px]  w-full h-[400px]"
          ></iframe>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl text-orange-500 my-8">Bize Ulaşın</h1>
          <div className="grid grid-cols-4 max-md:container gap-5 md:mx-4 w-full">
            <div className="col-span-2">
              <Input
                placeholder="Adınız"
                className="md:col-span-2 col-span-4 w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-2">
              <Input
                placeholder="Soyadınız"
                className="md:col-span-2 col-span-4 w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-2">
              <Input
                placeholder="Doğum Tarihiniz"
                className="md:col-span-2 col-span-4 w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-2">
              <Input
                placeholder="TC Kimlik Numaranız"
                className="md:col-span-2 col-span-4 w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-2">
              <Input
                placeholder="Telefon"
                className="md:col-span-2 col-span-4 w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-2">
              <Input
                placeholder="E-posta"
                className="md:col-span-2 col-span-4  w-auto shadow-2xl border-1 border-gray-300"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
                size="sm"
              />
            </div>
            <div className="col-span-4 mb-4 ">
              <Textarea
                placeholder="Mesajınız"
                minRows={20}
                className="  shadow-2xl border-1 border-gray-300 col-span-12"
                classNames={{
                  inputWrapper: [
                    "bg-white",
                    "dark:bg-default/60",
                    "focus:bg-white",
                    "hover:bg-white",
                    "dark:hover:bg-default/70",
                    "!cursor-text",
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Kvkk />
    </div>
  );
}
