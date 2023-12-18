"use client";

import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

import { Button, Input } from "@nextui-org/react";
import Kvkk from "@/components/Kvkk";

export default function IptalGuncelleme() {
  return (
    <div>
      <Header />
      <div className="bg-orange-500 w-full h-28 flex justify-center items-center text-3xl text-white font-bold mb-20">
        Rezervasyon İptal / Güncelleme
      </div>
      <div className="container  items-center justify-center flex md:flex-row flex-col gap-12 mb-20">
        <div>
          <Image
            src="/assets/card-background.jpeg"
            alt="logo"
            width={500}
            height={600}
          />
        </div>
        <div className="flex flex-col gap-10 w-1/2">
          <h1 className="text-xl font-bold mb-4">
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
          <Button className="md:col-span-1 col-span-3 bg-orange-500 w-1/3 rounded-full md:self-end self-center mr-6 text-white p-2">
            Kayıt Ol
          </Button>
        </div>
      </div>
      <Kvkk />
    </div>
  );
}
