import { FacebookIcon } from "@/assets/icons/facebook";
import { InstagramIcon } from "@/assets/icons/instagram";
import { LinkedinIcon } from "@/assets/icons/linkedin";
import { LocationIcon } from "@/assets/icons/location";
import { MessageIcon } from "@/assets/icons/message";
import { PhoneIcon } from "@/assets/icons/phone";
import { TwitterIcon } from "@/assets/icons/twitter";

import React from "react";

import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="bg-[#00285f] px-4  py-8 md:py-20  min-h-[40vh] text-white ">
      <div className="container flex flex-col items-center gap-5 justify-center">
        <div className="flex md:flex-row flex-col w-full gap-4 md:gap-10">
          <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-10 md:items-start">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={250}
              height={140}
              className="w-full"
            />
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
              interdum habitant Porttitor augue enim.
            </p>
            <div className="flex flex-row justify-around md:justify-normal gap-2">
              <FacebookIcon />
              <LinkedinIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
          <div className="flex flex-col w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl md:text-2xl mt-2">Sayfa</h1>
            <p className="text-xs md:text-sm">Rezervasyonları Yönet</p>
            <p className="text-xs md:text-sm">Araçlar</p>
            <p className="text-xs md:text-sm">Kampanyalar</p>
            <p className="text-xs md:text-sm">Ofisler</p>
            <p className="text-xs md:text-sm">Hizmetler</p>
            <p className="text-xs md:text-sm">Ürünler ve Güvenceler</p>
          </div>
          <div className="flex flex-col w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl md:text-2xl mt-2">Linkler</h1>
            <p className="text-xs md:text-sm">Kullanım Koşulları</p>
            <p className="text-xs md:text-sm">Gizlilik Politikası</p>
            <p className="text-xs md:text-sm">KVKK</p>
          </div>
          <div className="flex flex-col w-full sm:w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl md:text-2xl mt-2">Bize Ulaşın</h1>
            <div className="flex flex-row items-center gap-2">
              <PhoneIcon />
              <p className="text-xs md:text-sm">+90 522 222 22 22</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MessageIcon />
              <p className="text-xs md:text-sm">info@trakya.qualizto.com</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <LocationIcon />
              <p className="text-xs md:text-sm">Edirne</p>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 w-full text-start gap-2 ">
            <h1 className="font-bold text-xl md:text-2xl mt-2">Kariyer</h1>
            <p className="text-xs md:text-sm">
              Lorem ipsum dolor sit amet consectetur. Urna nibh sem risus nec
              interdum.
            </p>
            <button className="w-full bg-[#D9D9D9] text-[#002B64] text-md font-bold rounded-2xl py-1 px-1">
              Bize Ulaşın
            </button>
          </div>
        </div>
        <div className="border-b-[1px] border-white w-full my-4"></div>
        <p className="text-xs md:text-sm font-light">
          Copyright @<span>{year}</span>. Qualizto All Right Reserved
        </p>
      </div>
    </section>
  );
}
