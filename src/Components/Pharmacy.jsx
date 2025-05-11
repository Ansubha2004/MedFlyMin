import React from 'react'
import clsx from 'clsx'
import Button from './Button.jsx'
import rating from '../assets/images/rating.png'



function Pharmacy({Pharmacyname,distance, deliverytime}) {
  return (
    <div className="min-w-[400px] min-h-[110px] rounded-[10px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.25)]  flex flex-col items-center justify-end mx-4 my-3">
      <div className="flex justify-between items-center w-[90%] border-box pt-2">
        <div>
            <p className="text-[24px] font-[500]">{Pharmacyname}</p>
            <p className="text-[16px] font-[300]">{distance+` km away`}</p>
            <img src={rating} className="h-[31px] object-contain" />
        </div>
        <Button content="Order Now" theme="themeorange2" specification="s5"/>
      </div>
      <p className="text-[14px] font-[300]">{`Get within `+deliverytime+ ` mins`}</p>
    </div>
  )
}

export default Pharmacy
