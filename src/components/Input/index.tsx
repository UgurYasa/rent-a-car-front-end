"use client";
import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { Input, Button } from "@nextui-org/react";

export default function InputComponent({ placeHolder }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState(new Date());
  const onChange = (temp: any) => {
    setValue(temp);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-row w-full">
        <Input
        placeholder={placeHolder}
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
          endContent={
            <Button style={{ backgroundColor: "white" }}>
              <div className="flex flex-row gap-4">
                <div className="border-l-2"/>
                <BiTargetLock className="h-full w-10 text-[#ed5505]" />
              </div>
            </Button>
          }
        />
      </div>

      {showModal && <div className="w-60 h-10 absolute"></div>}
    </>
  );
}
