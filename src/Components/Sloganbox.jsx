import React from 'react'
import clsx from 'clsx';
import crossicon from '../assets/designcomponents/crossicon.png';
import deliveryicon2 from '../assets/designcomponents/deliveryicon2.png';
import dollaricon  from '../assets/designcomponents/dollaricon.png';
import mobileicon from '../assets/designcomponents/mobileicon.png';

export default function Sloganbox({extracss,heading,body,page,index}) {

    //tailwindcss
    const common='w-[530px] min-h-[170px] rounded-[30px] flex justify-center items-start shadow-[2px_4px_5px_0px_rgba(0,0,0,0.25)] hover:scale-[1.015] transition-all duration-100 ease-in mb-[30px] border-box py-[25px] px-[45px]';
    
    const iconset={
        problem:[deliveryicon2,crossicon,dollaricon,mobileicon],
        solution:[deliveryicon2,crossicon,dollaricon,mobileicon]
    }

    return (
    <>
        <div className={clsx(common,extracss)}>
            
            <img src={iconset[page][index]} className="w-[52px] mr-[25px]" />
            
            <div className="h-full flex flex-col justify-between">
                <p className="my-[2px] text-[28px] font-[500] font-[Inter] text-[#4D4D4D]">{heading}</p>
                <p className="leading-snug text-[24px] font-[100] font-[Inter] text-[#000000] opacity-[65%]">{body}</p>
            </div>
        </div>
    </>
  )
}
