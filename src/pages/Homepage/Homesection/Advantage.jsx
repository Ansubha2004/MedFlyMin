import React from 'react'
import clsx from 'clsx';
import whitetickicon from '../../../assets/images/whitetickicon.png'

export default function Advantage() {

    const text=["Faster delivery times","Support for local businesses","Better customer satisfaction","Increased pharmacy revenue"];

  return (
    <>
      <div id="about" className="w-full h-auto relative flex flex-col justify-center items-center">
        
        <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
            <p className="leading-snug text-[52px] font-[700]">The <span className="text-[#F2630A]">MedFlyMin</span> Advantage</p>
            <br/>
            <div className="w-[300px] h-[4px] bg-[#F2630A] "></div>
            <br/>
            <br/>
        </div>
        <p className="w-[65%] text-center text-[32px] leading-[40px] text-[#4D4D4D] font-light">Our platform creates a win-win ecosystem where pharmacies grow their business while customers receive medications faster than ever before.</p>
        <br/>
        <br/>
        <br/>
        <div className="w-[75%] min-h-[250px] bg-[linear-gradient(to_right,_#D95300_26%,_#FF8D34_62%,_#F2630A_73%)] flex flex-wrap justify-center items-center rounded-[30px]"  >
            {
                text.map((t,index)=>(
                    <div key={index} className="w-[45%] flex items-center">
                        <img src={whitetickicon} className="h-[80px] w-[80px]" alt="white tick icon"/>
                        <p className="text-[32px] leading-[40px] text-white font-light">{t}</p>
                    </div>
                ))
            }
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  )
}
