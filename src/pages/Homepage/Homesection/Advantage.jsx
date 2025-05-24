import React from 'react'
import clsx from 'clsx';
import whitetickicon from '../../../assets/images/whitetickicon.png'
import scrolltoview from '../../../hooks/scrolltoview.jsx';

export default function Advantage() {

  //javascript
  scrolltoview()

    const text=["Faster delivery times","Support for local businesses","Better customer satisfaction","Increased pharmacy revenue"];

  return (
    <>
      <div id="about" className="w-full h-auto relative flex flex-col justify-center items-center scroll-mt-[150px] sm:scroll-mt-[80px] mt-10 sm:mt-0 px-[10px] sm:px-0">
        
        <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
            <p className="leading-snug text-[33px] text-center sm:text-[52px] font-[700]">The <span className="text-[#F2630A]">MedFlyMin</span> Advantage</p>
            <br/>
            <div className="w-[300px] h-[4px] bg-[#F2630A] hidden sm:block"></div>
            
        </div>
        <p className="w-full sm:w-[65%] sm:mt-[48px] text-center text-[15px] sm:text-[32px] sm:leading-[40px] text-[#4D4D4D] font-light">Our platform creates a win-win ecosystem where pharmacies grow their business while customers receive medications faster than ever before.</p>
        <br/>
        
        <div className=" sm:mt-[48px] w-full sm:w-[75%] min-h-[250px] bg-[linear-gradient(to_right,_#D95300_26%,_#FF8D34_62%,_#F2630A_73%)] flex flex-col sm:flex-row sm:flex-wrap justify-center items-center rounded-[15px] sm:rounded-[30px] sm:space-y-0 space-y-3 "  >
            {
                text.map((t,index)=>(
                    <div key={index} className="w-[90%] sm:w-[45%] flex items-center ">
                        <img src={whitetickicon} className="sm:h-[80px] sm:w-[80px] h-[40px]" alt="white tick icon"/>
                        <p className="text-[20px] sm:text-[32px] sm:leading-[40px] text-white font-light">{t}</p>
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
