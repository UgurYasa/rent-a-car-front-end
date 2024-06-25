import { Useful } from "@/constants/link-pages";
import React from "react";

export default function Link() {
  return (
    <div className="flex flex-col bg-slate-200 w-full ">
      {Useful.map((item) => (
        <div
          className="container flex flex-col gap-5 justify-center my-5"
          key={item.id}
        >
          <h1 className="font-bold text-2xl">{item.title}</h1>

          <p>
            <span>&#8250;</span> {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
