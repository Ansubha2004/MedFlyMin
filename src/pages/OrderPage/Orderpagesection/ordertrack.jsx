import React from 'react'
import clsx from 'clsx'
import Button from '../../../Components/Button.jsx'
import locationicon2 from '../../../assets/images/locationicon2.png'
import Prescriptionicon from '../../../assets/images/Prescriptionicon.png'
import uploadicon from '../../../assets/images/uploadicon.png'


export default function ordertrack() {

  return (
    <div className="w-full h-auto flex flex-col  items-center">
      <div className="w-full h-auto flex justify-between items-center">
         <div id="prescription" className="bg-[#FFEEE4]  w-full mr-15 min-h-[90px] rounded-[10px] border-[1px] border-solid border-[#00000030] flex items-center justify-around">
            <img src={Prescriptionicon} className=" w-[50px] object-fit"/>
            <p className="font-[600] text-[20px]">Order with your <span className="text-[#F2630A]">Prescription</span></p>
            <p className="text-[#00000090] font-[15px]">Upload it in .pdf format</p>
            <Button content="Upload" theme="themeorange2" specification="s1" icon={uploadicon} iconcss="w-[26px] h-[26px] ml-5" additionalcss="text-[20px] font-[500]"/> 
         </div>
        <Button theme="themeblack" content="Track Your Order" specification="s1" icon={locationicon2} iconcss="w-[23px] ml-3" additionalcss="text-[17px]"  />
      </div>
      <br/>
    
      <div className="w-full flex flex-wrap justify-evenly items-start gap-6 p-4">
      {[
        "Upload a photo of your prescription",
        "Add your delivery address and place the order",
        "Your nearest pharmacy will call you to confirm the order",
        "Your medicines will get delivered within minutes"
        ].map((content, index) => (
        <div key={index} className="flex flex-col items-center max-w-[200px] text-center">
            <div className="h-[70px] w-[70px] rounded-full bg-orange-200 text-[#F2630A] border-[1px] border-solid border-[#00000030] font-semibold text-[27px] flex justify-center items-center mb-2 hover:scale-[1.1] hover:border-orange-600 transition-all duration-200 ease-out">
                {index + 1}
            </div>
             <p className="text-[14px]">{content}</p>
        </div>
        ))}
       </div>
       <br/>
       <br/>
    </div>
  )
}
