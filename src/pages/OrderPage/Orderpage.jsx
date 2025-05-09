import React from 'react'
import Navbar from './Orderpagesection/Navbar.jsx' 
import Section1 from './Orderpagesection/section1.jsx'
import Ordertrack from './Orderpagesection/ordertrack.jsx'

export default function Orderpage() {
  return (
    <div className="relative flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-1 w-full  overflow-x-hidden relative border-box px-[50px]">
          <Section1 />
          <Ordertrack />
        </main>
    </div>
  )
}
