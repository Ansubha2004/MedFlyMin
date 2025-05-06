import React from 'react'
import Button from '../../../Components/Button.jsx'
import clsx from 'clsx'

export default function Navbar() {

  //tailwindcss
  const hoverbuttons='hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out'

  return (
    <nav className="bg-transparent font-[Inter] w-full min-h-auto flex justify-between items-center box-border px-4 sm:px-8 py-4 absolute z-[10]">
      <img src="/logo.png" className="h-[75px] sm:h-[94px]" alt="Logo" />
      <ul className="text-[25px] font-[Inter] font-[500] space-x-[44px] flex items-center justify-center">
        <a className={clsx(hoverbuttons)} href="#welcomepage">Home</a>
        <a className={clsx(hoverbuttons)} href="#about">About</a>
        <a className={clsx(hoverbuttons)} href="#workflow">How it works</a>
        <a className={clsx(hoverbuttons)} href="#contactus">Contact Us</a>
      </ul>
      <Button content="Order Now" theme="themeblack" specification="s1" additionalcss='hover:opacity-[0.8] duration-100 linear'/>
    </nav>
  )
}
