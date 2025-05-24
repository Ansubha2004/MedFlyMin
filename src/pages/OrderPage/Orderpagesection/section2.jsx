import React from 'react'
import Button from '../../../Components/Button.jsx'
import Courier from '../../../assets/images/courier.gif'
import uploadicon from '../../../assets/images/uploadicon.png'
import Pharmacy from '../../../Components/Pharmacy.jsx'
import Pharmacyjson from '../../../jsondata/pharmacydata.json'


function section2() {
  return (
    <div>
        
        <div id="prescription" className="bg-[#CD8BB459] my-[24px] sm:mb-[24px] sm:mt-[48px]  w-full min-h-[50px] sm:min-h-[90px]  rounded-[10px] border-[1px] border-solid border-[#00000030] flex items-center justify-around">
            <p className="sm:block hidden font-[600] text-[20px]">Order previously ordered medicines</p>
            <p className="sm:hidden font-[600] text-[15px] pl-2">Previously ordered medicines</p>
            <p className="sm:block hidden text-[#00000090] font-[15px]">Order now to get your medicines within minutes</p>
            <img src={Courier} className="sm:block hidden w-[50px] object-fit rounded-[50%]"/>
            <Button content="Order Now" theme="themeblack" specification="s1" additionalcss="sm:scale-[1] scale-[0.75] text-[16px] sm:text-[20px] font-[500] rounded-l-full rounded-r-full"/> 
         </div>
        <p className="font-[600] sm:mb-[24px] text-[18px] sm:text-[32px]">Your nearby partner pharmacies</p>
        
        <div id="container" className="w-full h-auto flex gap-2 sm:gap-5 overflow-x-auto no-scrollbar ">
        {
            Pharmacyjson.map((pharmacydata,index)=>(
                <Pharmacy key={index} Pharmacyname={pharmacydata.pharmacy} distance={pharmacydata.distance} deliverytime={pharmacydata.deliverytime} />
            ))
        }
        </div>
        <br/>
        
    </div>
  )
}

export default section2
