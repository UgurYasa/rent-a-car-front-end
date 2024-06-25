import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Contact, Icons, Links, Page } from "@/constants/footer";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="bg-[#00285f] px-4  py-8 lg:py-20  min-h-[40vh] text-white ">
      <div className="container flex flex-col items-center gap-5 justify-center">
        <div className="flex lg:flex-row flex-col w-full gap-4 lg:gap-10 container">
          <div className="flex flex-col w-full md:w-1/2 gap-4 lg:gap-10 lg:items-start">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={250}
                height={140}
                className="w-full"
              />
            </Link>
            <p className="text-xs lg:text-sm">
              Kaliteli araç kiralama deneyimi için en doğru adres: Qualizto Rent
              a Car.
            </p>
            <div className="flex flex-row justify-around lg:justify-normal gap-2">
              {Icons.map((icon) => (
                <Link href={icon.href} target="_blank" key={icon.id}>
                  {icon.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl lg:text-2xl mt-2">{Page.title}</h1>
            {Page.pages.map((page) => (
              <Link href={page.href} key={page.id}>
                <p className="text-xs md:text-sm">{page.title}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl lg:text-2xl mt-2">
              {Links.title}
            </h1>
            {Links.links.map((link) => (
              <Link href={link.href} key={link.id}>
                <p className="text-xs md:text-sm">{link.title}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col w-full sm:w-1/3 text-start gap-2">
            <h1 className="font-bold text-xl lg:text-2xl mt-2">
              {Contact.title}
            </h1>
            {Contact.infos.map((info) => (
              <div className="flex flex-row items-center gap-2" key={info.id}>
                {info.icon}
                <p className="text-xs lg:text-sm">{info.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:w-1/2 w-full text-start gap-2 ">
            <h1 className="font-bold text-xl lg:text-2xl mt-2">Kariyer</h1>
            <p className="text-xs lg:text-sm">
              Herhangi bir aksilik durumunda yardım almak için lütfen aşağıdaki
              &#8243;Bize Ulaşın&#8243; butonuna tıklayın. Size en kısa sürede geri dönüş
              yapacağız.
            </p>
            <Link href="/iletisim">
              <button className="w-full bg-[#D9D9D9] text-[#002B64] text-lg font-bold rounded-2xl py-1 px-1">
                Bize Ulaşın
              </button>
            </Link>
          </div>
        </div>
        <div className="border-b-[1px] border-white w-full my-4"></div>
        <p className="text-xs lg:text-sm font-light">
          Copyright @<span>{year}</span>. Qualizto All Right Reserved
        </p>
      </div>
    </section>
  );
}
