import React from 'react'
import {Link} from "react-router-dom"
import Button from '../../../Components/Button.jsx'
import clsx from 'clsx'

export default function Navbar() {

  //tailwindcss
  const hoverbuttons='hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out '

  return (
    <div className="w-screen min-h-auto flex justify-between items-center box-border pl-[25px] pr-[67px] absolute z-[10]">
      <img src="/logo.png" className="h-[75px] sm:mx-[25px] sm:my-[20px] sm:h-[94px]" />
      <ul className="text-[25px] font-[Inter] font-[500] space-x-[44px] flex items-center justify-center">
        <Link className={clsx(hoverbuttons)} to="">Home</Link>
        <Link className={clsx(hoverbuttons)} to="">About</Link>
        <Link className={clsx(hoverbuttons)} to="">How it works</Link>
        <Link className={clsx(hoverbuttons)} to="">Contact Us</Link>
      </ul>
      <Button content="Order Now" theme="themeblack" specification="s1" additionalcss='hover:opacity-[0.8] ]  duration-100 linear'/>
    </div>
  )
}
