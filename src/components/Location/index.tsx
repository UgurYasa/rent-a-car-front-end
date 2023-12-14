"use client"
import React from 'react'
import InputComponent from '../Input'

export default function Location({label,placeHolder}:any) {
  const list = label.split(" ");
  return (
    <div className='w-full h-auto  flex flex-row items-center my-5'>
        <div className='border-r-2 border-[#ed5505]  h-20 ml-3 md:block hidden'/>
        <p className='text-white text-base mx-2 font-extralight md:block hidden'>{list[0]} <br /> {list[1]} <br />{list[2]}</p>
        <InputComponent placeHolder={placeHolder}/>
    </div>
  )
}
