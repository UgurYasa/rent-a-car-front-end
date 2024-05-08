import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Slider from "@/components/Slider";
import React from "react";

export default function NotFound() {

    
  return (
    <div className="flex flex-1 flex-col bg-slate-400">
    <Header />
    <div className="w-full h-96 flex flex-col items-center justify-center max-md:my-20 max-md:px-5">
        <h1 className="xl:text-3xl md:text-xl text-lg text-black font-black">Aradığınız sayfa şu anda kullanılamıyor.</h1>
        <h1 className="xl:text-3xl md:text-xl text-lg text-black font-black">Lütfen daha sonra tekrar deneyin. 😀</h1>
    </div>
    
    <Footer />
  </div>
  )
  
  
  
}
