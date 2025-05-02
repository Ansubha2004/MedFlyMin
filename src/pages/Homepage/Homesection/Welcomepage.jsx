import React from 'react'
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import background1 from '../../../assets/designcomponents/background1.png'
import blurshade1 from '../../../assets/designcomponents/blurshade1.png'
import Button from '../../../Components/Button.jsx'
import tickicon from '../../../assets/images/tickicon.png'
import deliveryicon from '../../../assets/images/deliveryicon.png'
import locationicon from '../../../assets/images/locationicon.png'



export default function Welcomepage() {

    //tailwincss
    const iconcase='h-[110px] w-[110px] rounded-[50%] bg-[#F5F5F5] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-200 ease-out hover:scale-[1.05] border-transparent border-[2px] border-solid hover:border-[#F2630A] '
    const iconsize='h-[80px] w-[80px] ';
    const iconflex='flex flex-col gap-2 text-[24px] font-[100] justify-center items-center'

    //js
    const icons=[tickicon,deliveryicon,locationicon];
    const icontext=['Verified Medicines','Delivery within hours','Local Pharmacies'];


  return (
    <>
        <div id="welcomepage" className="relative w-screen h-auto  ">
            <div className="h-auto w-full relative z-[1]  pt-[134px] box-border px-[80px]">
                <div className="max-w-[550px] relative z-[3]">
                    <br/><br/>
                    <p className="leading-snug text-[52px] font-[700]"><span className="text-[#F2630A]">Medicines Delivered</span> In Minutes, Not Days</p>
                    <br/><br/>
                    <p className="text-[32px] leading-[36px] text-[#4D4D4D]">Connecting you with local pharmacies for faster access to essential medications.</p>
                    <br/><br/>
                    <Button content="Order now →" theme="themeorange" specification="s2" additionalcss="mb-[15px] active:bg-orange-600 " link="/login"/>
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
                <br/>
                <br/>
                <br/>
                <img src={background1} className="h-[730px] w-[990px] absolute z-[2] top-2/15 right-[30px]"/>
                <img src={blurshade1} className="h-[400px] w-[850px] absolute z-[1] top-0 right-2/10"/>
            </div>
        </div>
    </>
    
  )
}
