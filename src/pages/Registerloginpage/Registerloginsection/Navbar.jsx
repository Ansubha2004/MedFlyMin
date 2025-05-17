import React from 'react'
import clsx from 'clsx'
import {Link,useNavigate} from 'react-router-dom';

export default function Navbar({mode}) {

    //tailwindcss
    const hoverbuttons='text-[18px] sm:text-[24px] hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] active:border-[#F2630A] transition-all duration-200 ease-out '


    //js
    const navigate=useNavigate();
    const reload=(e)=>{
      e.preventDefault();
      if(mode=="register")
        navigate("/login");
      else
      navigate("/register");
      window.location.reload();
    }

    
    

  return (
    <nav className="font-[Inter] w-screen min-h-auto flex justify-between items-center box-border sm:pl-[25px] sm:pr-[67px] px-[20px] absolute z-[10]">
      <img src="/logo.png" className="h-[60px] sm:mx-[25px] sm:my-[20px] sm:h-[94px]" />
      <ul className="text-[25px] font-[Inter] font-[500] space-x-[44px] flex items-center justify-center">
        <Link onClick={reload} className={clsx(hoverbuttons,"font-bold hidden sm:block")} to={`/${mode=="register"?'login':'register'}`}>{mode=="register"?"Login":"Sign Up"}</Link>
        <a  className={clsx(hoverbuttons)} href="/#contactus" >Contact Us</a>
      </ul>
    </nav>
  )
}
