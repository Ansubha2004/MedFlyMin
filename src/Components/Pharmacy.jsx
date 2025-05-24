import React from 'react'
import clsx from 'clsx'
import Button from './Button.jsx'
import rating from '../assets/images/rating.png'



function Pharmacy({Pharmacyname,distance, deliverytime}) {
  return (
    <div className="sm:min-w-[400px] min-w-[220px] sm:min-h-[110px] min-h-[90px]  rounded-[10px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.25)]  flex flex-col items-center justify-center sm:justify-end mx-2  sm:mx-4 my-2 sm:my-3">
      <div className="flex justify-between items-center w-[90%] border-box sm:pt-2">
        <div>
            <p className=" text-[15px] sm:text-[24px] font-[500]">{Pharmacyname}</p>
            <p className="text-[10px] sm:text-[16px] font-[300]">{distance+` km away`}</p>
            <img src={rating} className="h-[20px] sm:h-[31px] object-contain" />
        </div>
        <Button content="Order Now" theme="themeorange2" specification="s5" additionalcss="text-[13px] active:scale-[0.96]"/>
      </div>
      <p className="sm:block hidden text-[14px] font-[300]">{`Get within `+deliverytime+ ` mins`}</p>
    </div>
  )
}

export default Pharmacy
