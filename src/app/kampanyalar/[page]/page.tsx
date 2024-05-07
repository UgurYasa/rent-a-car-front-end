"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Kvkk from "@/components/Kvkk";
import NewCard from "@/components/NewCard";
import Link from "next/link";
import React from "react";
import {
  QualiztoCampaigns,
  QualiztoCorporateCampaigns,
  OtherAdvantages,
  QualiztoCooperationAgreements,
  campaignsTitles,
} from "@/constants/campaigns";
import Breadcumbs from "@/components/Breadcumbs";
import { useRouter } from "next/navigation";

export default function Kampanyalar({ params }: any) {
  var router = useRouter();
  var routeList = ["AnaSayfa"];
  const path = params.page;
  console.log(path);
  const route =
    path === "qualizto-kampanyalari"
      ? campaignsTitles[0]
      : path === "qualizto-kurumsal-kampanyalari"
      ? campaignsTitles[1]
      : path === "diger-avantajlar"
      ? campaignsTitles[2]
      :  campaignsTitles[3];
  const content= path === "qualizto-kampanyalari"
  ? QualiztoCampaigns
  : path === "qualizto-kurumsal-kampanyalari"
  ? QualiztoCorporateCampaigns
  : path === "diger-avantajlar"
  ? OtherAdvantages
  : QualiztoCooperationAgreements;
  routeList.push(route);
  
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-28 bg-gradient-to-b from-orange-600 to-orange-400 xl:text-3xl lg:text-2xl text-lg font-black text-white">
        {route}
      </div>
      <table className=" hidden md:block border-collapse  bg-[#00285f] container">
          <thead>
            <tr>
              {campaignsTitles.map((title, index) => (
                <th
                  key={index}
                  className={`py-2 px-10 text-white font-normal  ${
                    title
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("ş", "s")
                      .replaceAll("ı", "i")
                      .replaceAll("ğ", "g")
                      .replaceAll("ü", "u")
                      .replaceAll("ö", "o")
                      .replaceAll("ç", "c") === path
                      ? "bg-orange-600"
                      : "bg-[#00285f]"
                  } border-r hover:bg-orange-500 cursor-pointer`}
                  onClick={() => {
                    const endpoint = title
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("ş", "s")
                      .replaceAll("ı", "i")
                      .replaceAll("ğ", "g")
                      .replaceAll("ü", "u")
                      .replaceAll("ö", "o")
                      .replaceAll("ç", "c");

                    router.push(`/kampanyalar/${endpoint}`);
                  }}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
        </table>
     

      <div className="flex md:flex-row flex-col md:w-5/6 mx-auto  h-20 items-center justify-between max-md:mb-5">
        <div className="flex flex-row items-center gap-2">
          <p>Kategori Seç:</p>
          <p className="hover:cursor-pointer text-sm font-semibold">
            Tüm Kategoriler (5) <span className="text-[10px]">&#8897;</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 text-white">
          <button className="px-[14px] py-[6px] bg-orange-400">
          {/* bg-[#001a3d] hover:bg-orange-400 */}
            TÜMÜ(5)
          </button>
          <button className="px-[14px] py-[6px] bg-[#001a3d] hover:bg-orange-400">
            Yurtiçi(5)
          </button>
          <button className="px-[14px] py-[6px] bg-[#001a3d] hover:bg-orange-400">
            Yurtdışı(5)
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full max-md:px-5">
        <div className="grid xl:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-1 md:w-5/6 w-full border-t-[1px]">
          {content.map((item: any, index: number) => (
            <Link href={`/kampanya-detail/${path+"_"+index}`} key={index}>
              <NewCard
                key={index}
                imageUrl={item.imageUrl}
                buttonText={item.buttonText}
                title={item.title}
                subtitle={item.subtitle}
              />
            </Link>
          ))}
        </div>
      </div>
      <Breadcumbs routes={routeList} />
      <Kvkk />
      <Footer />
    </div>
  );
}
