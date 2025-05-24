import React,{useState,useRef,useEffect} from "react";
import Button from "../../../Components/Button.jsx";
import clsx from "clsx";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const hoverbuttons =
    "hover:text-[#F2630A] active:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out";

    //javascript
    const [navbarmobile,setnavbarmobile]=useState(true);
    const [rotated,setrotated]=useState(false)

    const iconref=useRef('');
    const navref=useRef('');
   

    const handleclick=()=>{
      iconref.current.style.transform=rotated?'rotate(0deg)':'rotate(90deg)'
      console.log(iconref.current)
      setrotated(!rotated);
      navref.current.style.display=navbarmobile?"block":"none";
      setnavbarmobile(!navbarmobile);

    }

    

  return (
    <nav className="fixed sm:absolute z-[10] w-full">
      <div className="bg-white/90 sm:bg-transparent font-[Inter] w-full max-h-auto sm:min-h-auto flex justify-between items-center box-border px-4  sm:px-8 sm:py-4 ">
        <img src="/logo.png" className="h-[60px] sm:h-[94px]" alt="Logo" />
        {/* Nav Links (Desktop) */}
        <ul className="hidden  text-[25px] font-[Inter] font-[500] space-x-[44px] sm:flex items-center justify-center">
          <a className={clsx(hoverbuttons)} href="#welcomepage">
            Home
          </a>
          <a className={clsx(hoverbuttons)} href="#about">
            About
          </a>
          <a className={clsx(hoverbuttons)} href="#workflow">
            How it works
          </a>
          <a className={clsx(hoverbuttons)} href="#contactus">
            Contact Us
          </a>
        </ul>

        <div className="flex justify-center items-center ">
          <Button
            content="Order Now"
            theme="themeblack"
            specification="s1"
            additionalcss="hover:opacity-[0.8] duration-100 linear sm:text-[24px] text-[16px] scale-[0.85]"
            link="/login"
          />
          <div ref={iconref} onClick={handleclick} tabIndex={0} className={clsx("active:bg-orange-300 sm:hidden  p-4 rounded-[50%] transition-all duration-300 ease-in-out")}>
            <IoMdMenu className="scale-[1.5] " />
          </div>
        </div>

        {/* Mobile Menu (Hidden by default) */}
      </div >
      <ul ref={navref} className="bg-[#F2630A]/90 text-white text-center space-x-6 py-2 h-auto space-y-4 w-full hidden shadow-[inset_0_0px_20px_rgba(0,0,0,0.3)]">
        <a className={clsx(hoverbuttons)} href="#welcomepage">
          Home
        </a>
        <a className={clsx(hoverbuttons)} href="#about">
          About
        </a>
        <a className={clsx(hoverbuttons)} href="#workflow">
          How it works
        </a>
        <a className={clsx(hoverbuttons)} href="#contactus">
          Contact Us
        </a>
      </ul>
    </nav>
  );
}
