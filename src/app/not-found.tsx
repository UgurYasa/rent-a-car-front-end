import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col bg-slate-400">
      <div className="w-full h-96 flex flex-col items-center justify-center max-md:my-20 max-md:px-5">
        <h1 className="xl:text-3xl md:text-xl text-lg text-black font-black">
          Aradığınız sayfa şu anda kullanılamıyor.
        </h1>
        <h1 className="xl:text-3xl md:text-xl text-lg text-black font-black mb-10">
          Lütfen daha sonra tekrar deneyin. 😀
        </h1>
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <Link
            href="/"
            title="Get quote now"
            className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-slate-700 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
