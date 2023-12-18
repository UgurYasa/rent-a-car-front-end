"use client";

import { MENU_TREE_ITEM } from "@/types/menu";
import MenuItems from "../MenuItems";
import clsx from "clsx";

const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
  isMenu
}: {
  submenus: MENU_TREE_ITEM[];
  dropdown: boolean;
  depthLevel: number;
  isMenu?:boolean
}) => {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={clsx(
        "absolute left-0 right-auto min-w-[10rem] rounded-lg px-0 py-2 text-sm shadow ",
        depthLevel === 1 && ` absolute bg-white  ${isMenu?"top-0 relative w-full left-0":"right-0 w-72" }`,
        depthLevel > 1 && "left-full top-[-7px] -z-10 bg-white",
        dropdown ? "block" : "hidden"
      )}
    >
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
