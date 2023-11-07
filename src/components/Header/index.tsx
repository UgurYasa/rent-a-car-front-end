import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

import { useRouter } from "next/navigation";
import MenuItems from "./MenuItems";
import { MENU_TREE } from "@/types/menu";
import ClientOnly from "../ClientOnly";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const menu: MENU_TREE = [
    {
      id: 1,
      title: "Rezervasyonu Yönet",
      url: "/rezervasyon-yonet",
      submenu: [
        { id: 6, title: "Deneme", url: "/deneme", submenu: [] },
        { id: 7, title: "Deneme2", url: "/deneme2", submenu: [] },
        { id: 8, title: "", url: "", submenu: [] },
      ],
    },
    {
      id: 2,
      title: "Araçlar",
      url: "/araclar",
      submenu: [],
    },
    {
      id: 3,
      title: "Kampanyalar",
      url: "/kampanyalar",
      submenu: [],
    },
    {
      id: 4,
      title: "Ofisler",
      url: "/ofisler",
      submenu: [],
    },
    {
      id: 5,
      title: "Hizmetler",
      url: "/hizmetler",
      submenu: [],
    },
    {
      id: 6,
      title: "Ürünler & Güvenceler",
      url: "/urunler-guvenceler",
      submenu: [],
    },

    {
      id: 7,
      title: "Üye Girişi",
      url: "/uye-girisi",
      submenu: [],
      icon: <FaUser size={20} />,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#00285f] py-5">
      <div className="container flex w-full items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <div className="relative mr-16 h-[53px] w-[188px] mt-4 object-contain 2xl:h-[80px] 2xl:w-[278px]">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              onClick={() => {
                router.push("/");
              }}
            />
          </div>
        </Link>

        <nav className=" font-sans md:pt-2 2xl:pt-4">
          <GiHamburgerMenu
            size={26}
            className="fill-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {menu && (
            <ul
              className={clsx(
                "gap-10 text-sm text-white md:flex 2xl:text-xl",
                isMenuOpen
                  ? "fixed inset-0 flex flex-col items-center justify-around bg-primary-blue"
                  : "hidden"
              )}
            >
              <li
                className="self-end pr-10 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                X
              </li>
              {menu &&
                menu.map((menu, index) => {
                  const depthLevel = 0;
                  return (
                    <ClientOnly key={index}>
                      <MenuItems
                        items={menu}
                        key={index}
                        depthLevel={depthLevel}
                        icon={menu.icon}
                      />
                    </ClientOnly>
                  );
                })}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
