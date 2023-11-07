import React from "react";

const Kvkk = () => {
  return (
    <div className="grid grid-rows-2 gap-4">
      {/* İlk satır */}
      <div className="flex flex-row  gap-20 justify-center items-center bg-gray-100">
        <h1 className="col-span-1">
          Hemen e-posta bültenimize kaydol ve en yeni teklifleri duyan sen ol!
        </h1>
        <input
          className="col-span-1 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="E-posta adresinizi yazınız"
        />
        <label className="col-span-1">
          <input type="checkbox" className="mr-2" />
          <span className="underline mr-1">Aydınlatma Metnini </span>okudum.
        </label>
        <button className="col-span-1 bg-orange-500 rounded text-white p-2">
          Kayıt Ol
        </button>
      </div>

      {/* İkinci satır */}
      <div className="mx-20">
        <h1 className="mb-8 font-semibold text-xl">Qualizto ile yola çık.</h1>
        <p className="mb-8">
          Şehir dışına uzun seyahatler, şehir içinde konforlu ulaşım ya da
          keyifli bir hafta sonu kaçamağı… Araç kiralamada ihtiyaçlar herkese
          göre farklı olabilir. Bu yüzden Qualizto, birçok farklı kiralama
          seçeneği sunar. Yoğun bir günde ihtiyacın olan küçük bir otomobilden,
          yolculuklarında üst düzey konforu yaşayacağın büyük araçlara; en güzel
          tatillere çıkacağın SUV’lerden, yollarda rahatlığı tam anlamıyla
          hissedeceğin lüks araçlara kadar, Qualizto’ta tüm ihtiyaçlarının
          karşılığı var.
        </p>
      </div>
    </div>
  );
};

export default Kvkk;
