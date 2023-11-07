// import {forwardRef} from 'react'

// const Input = forwardRef<HTMLInputElement, any>(function InputElement(
//   {
//     title,
//     icon,
//     width,
//     ...rest
//   }: {
//     title: string
//     icon: any
//     width: string
//     [key: string]: any
//   },
//   ref,
// ) {
//   return (
//     <div className='h-10'>
//          <input
//         ref={ref}
//         type="text"
//         className={

//           ' shadow-md hover:shadow-lg transition duration-300 h-full'
//         }
//         placeholder={title}
//         {...rest}
//       />
//       <div className='border-r-8 border-black'/>

//     </div>
//   )
// })

// export default Input
"use client";
import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";

export default function Input({ width }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [value, setValue] = useState(new Date());
  const onChange = (temp: any) => {
    setValue(temp);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-row">
        <input
          className={
            "bg-white pl-5 focus:outline-none font-semibold w-full"
          }
        />
        <button onClick={() => {}}>
          <div className="border-l-[1px] border-black w-10 bg-white  "><BiTargetLock className="h-full w-full text-[#ed5505]"/></div>
        </button>
      </div>

      {showModal && <div className="w-60 h-10 absolute"></div>}
    </>
  );
}
