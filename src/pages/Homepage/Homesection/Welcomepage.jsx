import React from 'react'
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import circle1 from '../../../assets/designcomponents/circle1.png'
import circle2 from '../../../assets/designcomponents/circle2.png'
import Button from '../../../Components/Button.jsx'
import tickicon from '../../../assets/designcomponents/tickicon.png'
import deliveryicon from '../../../assets/designcomponents/deliveryicon.png'
import locationicon from '../../../assets/designcomponents/locationicon.png'



export default function Welcomepage() {

    //tailwincss
    const iconcase='h-[110px] w-[110px] rounded-[50%] bg-[#F5F5F5] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center'
    const iconsize='h-[80px] w-[80px] ';
    const iconflex='flex flex-col gap-2 text-[24px] font-[100] justify-center items-center'

    //js
    const icons=[tickicon,deliveryicon,locationicon];
    const icontext=['Verified Medicines','Delivery within hours','Local Pharmacies'];


  return (
    <>
        <div id="welcomepage" className="relative w-screen h-screen  ">
            <div id="content" className="h-full w-full absolute z-[1]  pt-[134px] box-border px-[80px]">
                <div className="max-w-[550px] relative z-[3]">
                    <br/><br/>
                    <p className="leading-snug text-[52px] font-[700]"><span className="text-[#F2630A]">Medicines Delivered</span> In Hours, Not Days</p>
                    <br/><br/>
                    <p className="text-[32px] leading-[36px] text-[#4D4D4D]">Connecting you with local pharmacies for faster access to essential medications.</p>
                    <br/><br/>
                    <Button content="Log In to order now →" theme="themeorange" specification="s2" additionalcss="mb-[15px] active:bg-orange-600 "/>
                    <Button content="Register Now →" specification="s2" theme="themewhite" additionalcss="border-solid border-black border-[1px]"/>
                    <br/>
                    <br/>
                    <br/>
                
                    
                </div>
                <div className="relative z-[3] w-full h-auto flex justify-evenly items-center">     
                        {
                            icons.map((icon,index)=>(
                                <div key={index} className={clsx(iconflex)}>
                                    <div className={clsx(iconcase)}>
                                        <img src={icon} className={clsx(iconsize)} alt="delivery icon"/>
                                    </div>
                                    <p>{icontext[index]}</p>
                                </div>
                            ))
                        }  
                </div>
                <img src={circle1} className="h-[650px] w-[650px] absolute z-[1] top-2/15 right-[30px]"/>
                <img src={circle1} className="h-[550px] w-[550px] absolute z-[0] top-6/15 right-3/9"/>
            </div>
        </div>
    </>
    
  )
}
