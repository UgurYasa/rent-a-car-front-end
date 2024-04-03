import { Button, Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const Kvkk = () => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div className="py-10 gap-4 bg-gray-100">
      <div className="grid md:grid-cols-9 grid-cols-4 md:gap-10 gap-6 container items-center bg-gray-100">
        <h1 className="md:col-span-4 col-span-4 font-bold md:text-[15px] text-[13px]">
          Hemen e-posta bültenimize kaydol ve en yeni teklifleri duyan sen ol!
        </h1>
        <Input
          placeholder="E-posta adresinizi yazınız"
          className="md:col-span-2 col-span-4"
          classNames={{
            inputWrapper: [
              "bg-white",
              "dark:bg-default/60",
              "focus:bg-white",
              "hover:bg-white",
              "dark:hover:bg-default/70",
              "!cursor-text",
            ],
          }}
          size="sm"
        />
        <label className="md:col-span-2 col-span-4">
          <Checkbox
            value={`${!selected}`}
            onValueChange={(e) => {
              setSelected(e);
            }}
          >
            <span className="underline mr-1">Aydınlatma Metnini </span>okudum.
          </Checkbox>
        </label>
        <Button className="md:col-span-1 col-span-3 bg-orange-500 rounded text-white p-2">
          Kayıt Ol
        </Button>
      </div>
    </div>
  );
};

export default Kvkk;
