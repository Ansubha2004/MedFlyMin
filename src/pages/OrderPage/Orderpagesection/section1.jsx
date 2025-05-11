import React from 'react'
import Inputbox2 from '../../../Components/Inputbox2.jsx'
import Searchicon from '../../../assets/images/Searchicon.png'

export default function section1() {
  return (
        <div className="w-full h-auto flex flex-col  items-center">
            <br/>
            <p className="z-[1] text-[35px] font-[700]">Life Won't Wait, Neither Should You</p>
            <br/>
            <Inputbox2 icon={Searchicon} type="text" id="searchbox" placeholder="Search medicines , pharmacies" />
            <p className="text-[22px] font-[600] mb-[25px]">Med<span className="text-orange-500" >Fly</span>Min: India’s Leading Pharmacy ecosystem</p>
        </div>
    
  )
}
