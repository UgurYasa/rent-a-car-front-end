"use client";

import { MENU_TREE_ITEM } from "@/types/menu";
import MenuItems from "../MenuItems";
import clsx from "clsx";

const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
}: {
  submenus: MENU_TREE_ITEM[];
  dropdown: boolean;
  depthLevel: number;
}) => {
  depthLevel = depthLevel + 1;
  return (
    <ul
      className={clsx(
        "absolute left-auto right-0 min-w-[10rem] rounded-lg px-0 py-2 text-sm shadow ",
        depthLevel === 1 && "right-0 bg-white",
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
