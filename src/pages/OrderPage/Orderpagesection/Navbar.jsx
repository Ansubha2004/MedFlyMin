import React from 'react'
import Button from '../../../Components/Button.jsx'
import clsx from 'clsx'
import locationicon2 from '../../../assets/images/locationicon2.png'
import cartimage from '../../../assets/images/cartimage.gif'
import dummyimage from '../../../assets/images/dummyimage.png'

export default function Navbar() {

  //tailwindcss
  const hoverbuttons='hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out'

  return (
    <nav className="bg-transparent font-[Inter] w-full min-h-auto flex justify-between items-center box-border px-4 sm:px-8 py-2  border-b-[1px] border-black/60 ">
      <span className="flex items-center gap-10">
        <img src="/logo.png" className="h-[75px] sm:h-[75px]" alt="Logo" />
        <Button content="Add Location" theme="themeorange" specification="s1" additionalcss='hover:opacity-[0.8] duration-100 linear text-[24px] scale-[0.8] ' icon={locationicon2} iconcss="w-[26px] ml-3" />
      </span>
      <span className="text-[20px] font-[Inter] flex items-center gap-10">
        <a className={clsx(hoverbuttons)} href="#help">Need Help?</a>
        <a className="flex items-center" href="#cart">
          <p className={clsx(hoverbuttons)} >Cart</p>
          <img src={cartimage} className="h-[40px] ml-1 object-contain"  />
        </a>
          <div className="w-[45px] h-[45px] rounded-[50%] border-transparent border-solid border-[2px] hover:scale-[1.1] hover:border-orange-600 transition-all duration-200 ease-out overflow-hidden active:scale-[0.9]">
            <img src={dummyimage} className="w-[55px] object-contain"/>
          </div>
          
        
      </span>
    </nav>
  )
}
