import React from 'react'
import Navbar from './Orderpagesection/Navbar.jsx' 
import Section1 from './Orderpagesection/section1.jsx'
import Ordertrack from './Orderpagesection/ordertrack.jsx'
import Scrolloffersection from './Orderpagesection/scrolloffersection.jsx'
import Section2 from './Orderpagesection/section2.jsx'
import advertise from '../../assets/images/advertise.png'

export default function Orderpage() {
  return (
    <div className="relative flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-1 w-full  overflow-x-hidden relative border-box px-[50px]">
          <Section1 />
          <Ordertrack />
          <Scrolloffersection />
          <Section2 />
        </main>
        <div className="w-full overflow-hidden bg-[#B528971A] min-h-[260px] flex justify-center items-center">
          <img src={advertise} className="h-[194px] object-fit" />
        </div>
        <br/>
        <br/>
        <p className="font-[600] text-[32px] border-box px-[50px]">Categories</p>
        <br/>
        <div className="box-border px-[50px]  w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          ["Fever & Cold","Diabetes Care","Health & BP Care","Sexual Wellness","Personal Care","Pain Relief","Digestive Health"].map((content, index) => (
            <div key={index} className="min-h-[60px] flex justify-center items-center rounded-[8px] border-solid border-[1px] border-black hover:scale-[1.01] active:scale-[0.99] transition-all duration-100 linear">
             <p className="text-lg font-medium ">{content}</p>
            </div>
          ))
        } 
        </div>
        <br/>
        <br/>

    </div>
  )
}
