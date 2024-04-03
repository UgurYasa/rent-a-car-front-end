"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown";
import { MENU_TREE_ITEM } from "@/types/menu";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const MenuItems = ({
  items,
  depthLevel,
  icon = null,
  isMenu
}: {
  items: MENU_TREE_ITEM;
  depthLevel: number;
  icon?: JSX.Element | null;
  isMenu?:boolean
}) => {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className="relative text-base 2xl:text-base"
      onMouseEnter={() => {
        setDropdown(true);
      }}
      onMouseLeave={() => setDropdown(false)}
    >
      <>
        <div
          className={clsx(
            "group flex w-full cursor-pointer items-center border-[none]",
            depthLevel === 0 && "py-2 text-white",
            depthLevel > 0 && "px-4 py-2 text-black hover:bg-[#4E84F7]"
          )}
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={(e) => {
            e.preventDefault();
            if (!items.url || items.url === "#") return;
            console.log(items);
            router.push(items.url);
          }}
        >
          {icon && (
            <span className="mr-2">
              {icon}
            </span>
          )}
          <span
            className={clsx(
              " block select-none no-underline group-hover:text-white",
              depthLevel === 0 ? "text-white" : "text-black"
            )}
          >
            {items.title}
          </span>
        </div>
        {items.submenu && items.submenu.length > 0 && (
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            isMenu={isMenu}
          />
        )}
      </>
    </li>
  );
};

export default MenuItems;
