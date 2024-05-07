"use client";

import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

import { Button, Input } from "@nextui-org/react";
import Kvkk from "@/components/Kvkk";
import Breadcumbs from "@/components/Breadcumbs";

export default function IptalGuncelleme() {
  const list =["AnaSayfa","Rezervasyon İptal / Güncelleme"]
  return (
    <div>
      <Header />
      <div className="bg-orange-500 w-full h-28 flex justify-center items-center md:text-3xl text-lg text-white font-bold md:mb-20 mb-5">
        Rezervasyon İptal / Güncelleme
      </div>
      <div className="container  items-center justify-center flex md:flex-row flex-col gap-12 md:mb-20 mb-5">
        <div>
          <Image
            src="/assets/card-background.jpeg"
            alt="logo"
            width={500}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-10 md:w-1/2 w-full md:px-0 px-5">
          <h1 className="md:text-xl text-sm font-bold mb-4 mx-2">
            Rezervasyonunu güncellemek veya iptal etmek için rezervasyon
            numaranı ve soyadını girin.
          </h1>
          <Input
            placeholder="Rezervasyon numaranızı yazınız"
            className="md:col-span-2 col-span-4 md:w-[650px] w-auto shadow-2xl border-1 border-gray-300"
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
          <Input
            placeholder="Soyadınızı yazınız"
            className="md:col-span-2 col-span-4 md:w-[650px] w-auto shadow-2xl border-1 border-gray-300"
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
          <Button className="col-span-4 bg-orange-500 w-full md:w-1/3 rounded-full md:self-end self-center md:mr-6 text-white p-2">
            Kayıt Ol
          </Button>
        </div>
      </div>
      <Breadcumbs routes={list} />
      <Kvkk />
    </div>
  );
}
