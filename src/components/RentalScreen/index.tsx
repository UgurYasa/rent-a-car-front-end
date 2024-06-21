import { useRouter } from "next/navigation";
import React, {useState} from "react";

export default function RentalScreen({
  setclicked,
  id,
}: {
  setclicked: any;
  id: any;
}) {
  const router = useRouter();
  const [kiralama, setKiralama] = useState("");
  const [teslim, setTeslim] = useState("");
  var day = 0;
  var amount = day * 100;
  const handleKiralamaChange = (event:any) => {
    const selectedDate = event.target.value;
    const kiralamaDate = new Date(selectedDate);
    const todayDate = new Date();

    // Sadece gün, ay ve yıl bazında karşılaştırma yapmak için
    if (
      kiralamaDate.getFullYear() < todayDate.getFullYear() ||
      (kiralamaDate.getFullYear() === todayDate.getFullYear() &&
        kiralamaDate.getMonth() < todayDate.getMonth()) ||
      (kiralamaDate.getFullYear() === todayDate.getFullYear() &&
        kiralamaDate.getMonth() === todayDate.getMonth() &&
        kiralamaDate.getDate() < todayDate.getDate())
    ) {
      alert("Kiralama tarihi bugünden küçük olamaz");
      setKiralama("");
    } else {
      setKiralama(selectedDate);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="w-2/3  bg-white flex flex-col items-center justify-center rounded-xl">
        <h1 className="font-bold text-2xl border-b-2 w-full p-3">
          Araç Kirala
        </h1>
        <div className="flex flex-col w-4/5 my-5">
          <p>Kiralama Tarihi</p>
          <input
            type="date"
            className="border-[1px] p-2"
            value={kiralama}
            onChange={handleKiralamaChange}
          />
        </div>
        <div className="flex flex-col w-4/5">
          <p>Teslim Tarihi</p>
          <input
            type="date"
            className="border-[1px] p-2"
            value={teslim}
            onChange={(event) => {
              setTeslim(event.target.value);
            }}
          />
        </div>
        <div className="flex md:flex-row flex-col max-md:gap-4 items-center justify-around md:w-4/5 w-full my-5">
          <button
            onClick={() => {
              var kiralamaDate = new Date(kiralama);
              var teslimDate = new Date(teslim);
              if (teslimDate >= kiralamaDate) {
                var diff = Math.abs(
                  teslimDate.getTime() - kiralamaDate.getTime()
                );
                day = Math.ceil(diff / (1000 * 60 * 60 * 24));
                amount = day===0?100:day * 100;
                router.push(`/payment/${id}/${day}/${amount}`);
              } else {
                alert("Teslim tarihi kiralama tarihinden küçük olamaz");
                setKiralama("");
                setTeslim("");
              }
            }}
            className="border-green-300 border-[1px] p-4 text-lg font-bold rounded-lg bg-green-400 text-white max-md:w-4/5 text-center"
          >
            Ödemeye geç
          </button>
          <button
            className="border-green-300 border-[1px] p-4 text-lg font-bold rounded-lg max-md:w-4/5 text-center"
            onClick={() => {
              setclicked(false);
            }}
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
}
