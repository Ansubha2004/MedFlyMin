import React from 'react'
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import background1 from '../../../assets/designcomponents/background1.png'
import blurshade1 from '../../../assets/designcomponents/blurshade1.png'
import Button from '../../../Components/Button.jsx'
import tickicon from '../../../assets/images/tickicon.png'
import deliveryicon from '../../../assets/images/deliveryicon.png'
import locationicon from '../../../assets/images/locationicon.png'
import tagline from '../../../assets/images/tagline.png'
import backgroundmobile1 from '../../../assets/designcomponents/backgroundmobile1.png'
import {checkscreenwidth} from '../../../hooks/checkscreenwidth.jsx';



export default function Welcomepage() {

    //tailwincss
    const iconcase='h-[70px] w-[70px] sm:h-[110px] sm:w-[110px] rounded-[50%] bg-[#F5F5F5] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center transition-all duration-200 ease-out active:scale-[1.05] :hover:scale-[1.05] border-transparent border-[2px] border-solid hover:border-[#F2630A] '
    const iconsize='h-[40px] w-[40px] sm:h-[80px] sm:w-[80px] ';
    const iconflex='flex flex-col gap-2 text-[24px] font-[100] justify-center items-center'

    //js
    const icons=[tickicon,deliveryicon,locationicon];
    const icontext=['Verified Medicines','Instant Medicine Finder','Local Delivery Within mins'];




  return (
    <>
        <div id="welcomepage" className="relative w-screen h-auto  ">
            <div className="h-auto w-full relative z-[1]  pt-[100px] sm:pt-[134px] box-border px-[20px] sm:px-[80px]">
                <div className="max-w-[550px] relative z-[3] flex flex-col items-center sm:block">
                    
                    <br/>
                    <img src={tagline} className="sm:hidden w-[220px] object-contain mt-3 "/>
                    <br/>
                    <p className="leading-tight sm:leading-snug text-[32px] sm:text-[48px] text-center sm:text-left font-bold sm:font-[700]"><span className="text-[#F2630A]">Find & Get Medicines Delivered</span> In Minutes, Not Hours</p>
                    <br/><br/>
                    <p className="text-center sm:text-left text-[16px] sm:text-[30px] leading-[25px] sm:leading-[30px] mt-13 sm:mt-0 text-white sm:text-[#4D4D4D]">Instantly connect with nearby pharmacies to get essential medicines—faster and stress-free.</p>
                    <br/><br/>
                    <Button content="Log in to find & order now →" theme={(checkscreenwidth()>=640)?"themeorange":"themewhitemobile"} specification="s2" additionalcss="mb-[15px] active:bg-orange-100 active:text-white   " link="/login"/>
                    <Button content="Register Now →" specification="s2" theme="themewhite" additionalcss="border-solid border-black border-[1px]  mt-[-5px] sm:mt-0 " link="/register"/>
                    <br/>
                    <br/>
                    <br/>
                
                    
                </div>
                <div className="relative z-[3] w-full h-auto flex justify-evenly items-center">     
                        {
                            icons.map((icon,index)=>(
                                <div key={index} className={clsx(iconflex," scale-[0.8] sm:scale-[1]")}>
                                    <div className={clsx(iconcase)}>
                                        <img src={icon} className={clsx(iconsize)} alt="delivery icon"/>
                                    </div>
                                    <p className=" drop-shadow-[1px_2px_2px_rgba(0,0,0,0.25)] text-[18px] font-[300] sm:font-[100] text-center sm:text-[25px] text-white sm:text-black">{icontext[index]}</p>
                                </div>
                            ))
                        }  
                </div>
                <br/>
                <br/>
                <br/>
                <img src={background1} className="hidden sm:block h-[730px] w-[990px] absolute z-[2] top-2/17 right-[30px]"/>
                <img src={backgroundmobile1} className="sm:hidden h-[70%]  w-full  absolute z-[2] top-4/14 right-0"/>
                <img src={blurshade1} className="hidden sm:block h-[400px] w-[850px] absolute z-[1] top-0 right-2/10"/>
            </div>
        </div>
    </>
    
  )
}
