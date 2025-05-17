import React from 'react';
import Button from '../../../Components/Button.jsx';
import clsx from 'clsx';




export default function Navbar() {
  const hoverbuttons = 'hover:text-[#F2630A] active:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out';
  

  return (
    <nav className="fixed sm:absolute z-[10] w-full">
      <div className="bg-white/90 sm:bg-transparent font-[Inter] w-full max-h-auto sm:min-h-auto flex justify-between items-center box-border px-4  sm:px-8 sm:py-4 ">
      <img src="/logo.png" className="h-[60px] sm:h-[94px]" alt="Logo" />
      {/* Nav Links (Desktop) */}
      <ul className="hidden  text-[25px] font-[Inter] font-[500] space-x-[44px] sm:flex items-center justify-center">
        <a className={clsx(hoverbuttons)} href="#welcomepage">Home</a>
        <a className={clsx(hoverbuttons)} href="#about">About</a>
        <a className={clsx(hoverbuttons)} href="#workflow">How it works</a>
        <a className={clsx(hoverbuttons)} href="#contactus">Contact Us</a>
      </ul>
      
      <Button
        content="Order Now"
        theme="themeblack"
        specification="s1"
        additionalcss="hover:opacity-[0.8] duration-100 linear sm:text-[24px] text-[16px] scale-[0.85]"
        link="/login"
      />

      
   

      {/* Mobile Menu (Hidden by default) */}
     
        

    </div>
    <ul className="bg-[#F2630A]/90 text-white text-center space-x-7 py-2 h-auto space-y-4 w-full sm:hidden shadow-[inset_0_0px_20px_rgba(0,0,0,0.3)]">
          <a className={clsx(hoverbuttons)} href="#welcomepage">Home</a>
          <a className={clsx(hoverbuttons)} href="#about">About</a>
          <a className={clsx(hoverbuttons)} href="#workflow">How it works</a>
          <a className={clsx(hoverbuttons)} href="#contactus">Contact Us</a>
    </ul>

    </nav>
  );
}
      