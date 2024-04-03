"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "../Login";
import { useRouter } from "next/navigation";
import MenuItems from "./MenuItems";
import { Image } from "@nextui-org/react";
import { menu } from "@/constants/header";
export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#00285f] py-5">
      <div className="container flex w-full items-center justify-between">
        <Link href="/" className="cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="logo"
            onClick={() => {
              router.push("/");
            }}
            className={`mr-16 h-[53px] w-[188px] mt-4 object-contain 2xl:h-[80px] 2xl:w-[278px] ${
              isMenuOpen ? "invisible" : "visible"
            }`}
          />
        </Link>

        <nav className=" font-sans md:pt-2 2xl:pt-4">
          <GiHamburgerMenu
            className={`fill-white  rounded-full border-2 border-slate-400 p-2 text-5xl  ${
              isMenuOpen ? "block" : "xl:hidden block"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {menu && (
            <ul
              className={clsx(
                "gap-10 text-2xl text-white xl:flex 2xl:text-xl",
                isMenuOpen
                  ? "fixed inset-0 flex flex-col  pl-5 items-start gap-2 bg-primary-blue md:w-1/3 w-1/2"
                  : "hidden"
              )}
            >
              <li
                className={`self-start pr-10 ${
                  isMenuOpen ? "block" : "hidden"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  alt="Logo"
                  src="/assets/logo.png"
                  className={`mr-16 h-[53px] w-[188px] 2xl:h-[80px] 2xl:w-[278px] mt-4 object-contain`}
                />
              </li>
              {menu &&
                menu.map((menuItem, index) => {
                  const depthLevel = 0;
                  return (
                    <div key={index}>
                      {menuItem.id === 7 ? (
                        <Login />
                      ) : (
                        <MenuItems
                          items={menuItem}
                          key={index}
                          depthLevel={depthLevel}
                          icon={menuItem.icon}
                          isMenu={isMenuOpen}
                        />
                      )}
                    </div>
                  );
                })}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
