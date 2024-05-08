import React from 'react'
import Location from '../Location'
import Date from '../Date'
import RentCar from '../RentCar'

export default function HomeSlider() {
  return (
    <div className="flex  flex-col items-center justify-between h-1/2 w-full md:-mt-0 -mt-10">
    <p className="absolute md:text-3xl text-xl  text-white font-bold -mt-24 ">
      <span className="md:block hidden text-center">
        Hayalindeki Maceralara{" "}
        <span className="animate-pulse">Qualizto</span> ile Başla!
      </span>
      <span className="md:hidden block text-center">
        Hayalindeki Maceralara <br />{" "}
        <span className="animate-pulse">Qualizto</span> ile Başla!
      </span>
    </p>

    <RentCar/>
  </div>
  )
}
