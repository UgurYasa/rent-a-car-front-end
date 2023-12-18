"use client";
import Comment from "@/components/Comment";
import Header from "@/components/Header";
import React from "react";
import { Input, Textarea } from "@nextui-org/react";

export default function Iletisim() {
  return (
    <div>
      <Header />
      <div className="flex flex-row ">
        <Comment
          title="Rezervasyonlarınız İçin"
          text="rez@budget.com.tr e-posta adresimizden veya hafta içi ve hafta sonu 09:00 - 19:00 saatleri arasında ise 444 4 722 numaralı hattımızdan 1’i tuşlayarak Rezervasyon Merkezimize ulaşabilirsin. www.budget.com.tr web sitemizden rezervasyonlarınızı online olarak da gerçekleştirebilirsin. Yurt Dışı aramaları için numaramız + 90 (216) 444 4 722"
        />
        <Comment
          title="Müşteri İlişkileri"
          text="Her türlü öneri, talep, eleştiri ve yorumların için hafta içi 08:00 17:00 saatleri arasında 444 4 722 numaralı hattımızdan 3’ü tuşlayarak İletişim Merkezimizden, web sitemizde bulunan iletişim formumuz veya cs@budget.com.tr e-posta adresimiz aracılığıyla bize ulaşabilirsin."
        />
        <Comment
          title="Tam Destek Hattı"
          text="Arıza, kaza ve benzeri her türlü acil durumda 444 4 722 numaralı hattımızdan 2’yi tuşlayarak 7 gün 24 saat bizlere ulaşabilir ve yol yardım talep edebilirsin."
        />
      </div>
      <div className="flex flex-row m-8 ">
        <div className="flex-col flex items-start justify-start gap-10 border-2 p-10 mx-10">
          <h1 className="text-orange-500 text-lg font-semibold">
            Genel Müdürlük
          </h1>
          <p>
            {" "}
            Ahmet Karadeniz Yerleşkesi, Trakya Üniversitesi, 22020 Merkez/Edirne
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.0301801124383!2d26.621345476674364!3d41.63347908069364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b33abbe7844db5%3A0x9140bcc82181086!2sTrakya%20%C3%9Cn.%20M%C3%BChendislik%20Fakultesi!5e0!3m2!1str!2str!4v1702902675988!5m2!1str!2str"
            width="800"
            height="600"
          ></iframe>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-xl text-orange-500 mb-8">Bize Ulaşın</h1>
          <div className="grid grid-cols-2 gap-10 mx-4">
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
              <Input
                placeholder="E-posta"
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
            <div className="grid grid-cols-12">
              <Textarea
                placeholder="Mesajınız"
                minRows={20}
                className="w-[650px] shadow-2xl border-1 border-gray-300 col-span-12"
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
    </div>
  );
}
