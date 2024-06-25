"use client";
import { rentalCarFeatures } from "@/constants/cars";
import { Button, card } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { parse } from "path";
import React, { useEffect } from "react";

export default function Payment({ params }: any) {
  const id = params.id[0];
  const day = params.id[1];
  const amount = params.id[2];
  const car = rentalCarFeatures.find((car) => car.id == id);
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");
  const [cvv, setCvv] = React.useState("");

  useEffect(() => {
    if (
      cardNumber.length === 4 ||
      cardNumber.length === 9 ||
      cardNumber.length === 14
    ) {
      setCardNumber(cardNumber + "-");
    }
  }, [cardNumber]);

  useEffect(() => {
    if (expirationDate.length === 2 && parseInt(expirationDate) >= 12) {
      setExpirationDate(expirationDate + "/");
    } else if (parseInt(expirationDate) > 12) {
      alert("Geçerli bir tarih giriniz.");
    }
    const date = expirationDate.split("/");
    if (parseInt(date[0]) > 12 || parseInt(date[1]) >31){
      alert("Geçerli bir tarih giriniz.");
    }
  }, [expirationDate]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 19) {
      setCardNumber(e.target.value);
    } else {
      alert("Kart numarası 16 haneli olmalıdır.");
    }
  };

  const handleExpirationDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.value.length <= 5) {
      setExpirationDate(e.target.value);
    } else {
      alert("Geçerli bir tarih giriniz.");
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 3) {
      setCvv(e.target.value);
    } else {
      alert("CVV 3 haneli olmalıdır.");
    }
  };

  return (
    <div className="flex flex-col bg-slate-200">
      <div className="bg-orange-500 w-full h-28 justify-center flex flex-col items-center py-24 gap-4">
        <h1 className="text-3xl text-white font-bold">Ödeme</h1>
      </div>
      <div className="flex flex-col p-5 w-full items-center">
        <p className="text-xl text-orange-500 w-4/5">{car && car.subtitle}</p>
        <p className="text-lg text-slate-500 w-4/5">{car && car.title}</p>
        <img src={car && car.image} alt="logo" className="w-4/5 self-center" />
      </div>
      <div className="flex md:flex-row flex-col max-md:w-4/5 max-md:p-4 md:items-center items-start justify-between md:p-2 gap-1 border[1px] self-center w-4/5">
        <p className="font-bold text-lg">
          Kiralanacak Gün Sayısı : <span>{day}</span>
        </p>
        <p className="font-bold text-lg">
          Ödenecek Tutar : <span>{amount}</span> TL
        </p>
      </div>
      <div className="flex flex-col p-5 w-full items-center gap-3">
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Ad Soyad</p>
          <input
            type="text"
            placeholder="Ad Soyad"
            className="border-[1px] p-2"
            onChange={(event) => handleNameChange(event)}
            value={name}
          />
          <p>Kredi kartı üzerinde yazan ad soyad</p>
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Kredi Kartı Numarası</p>
          <input
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            className="border-[1px] p-2"
            onChange={(event) => handleCardNumberChange(event)}
            value={cardNumber}
          />
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">Son Kullanma Tarihi</p>
          <input
            type="text"
            placeholder="AA/YY"
            className="border-[1px] p-2"
            onChange={(event) => handleExpirationDateChange(event)}
            value={expirationDate}
          />
        </div>
        <div className="flex flex-col w-4/5">
          <p className="font-bold text-lg">CVV</p>
          <input
            type="password"
            placeholder="***"
            className="border-[1px] p-2"
            onChange={(event) => handleCvvChange(event)}
            value={cvv}
          />
          <p>Kartın arkasındaki kod</p>
        </div>
      </div>
      <div className="flex p-5 w-4/5 self-center justify-end">
        <Button
          className="px-4 py-1 border-2 border-slate-500 w-40 rounded-xl text-center md:my-4 my-2 max-md:w-full"
          onClick={() => {
            alert("Ödeme Başarılı");
            router.push("/");
          }}
        >
          Ödeme Yap
        </Button>
      </div>
    </div>
  );
}
