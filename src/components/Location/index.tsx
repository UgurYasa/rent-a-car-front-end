import React from 'react'
import Input from '../Input'

export default function Location() {
  return (
    <div className='w-full h-auto  flex flex-row items-center my-5 ml-20'>
        <div className='border-r-2 border-[#ed5505]  h-20 ml-3'/>
        <p className='text-white text-base mx-2 font-extralight'>Teslim <br /> Alma <br />Ofisi</p>
        <Input/>
    </div>
  )
}
