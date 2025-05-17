import React,{useState,useEffect} from 'react'
import clsx from 'clsx';
import workflow from '../../../assets/images/workflow.png';
import blurshade2 from '../../../assets/designcomponents/blurshade2.png';
import Button from '../../../Components/Button.jsx';
import scrolltoview from '../../../hooks/scrolltoview.jsx';
import workflowmobile from '../../../assets/images/workflowmobile.png';
import {checkscreenwidth} from '../../../hooks/checkscreenwidth.jsx';


export default function Howitworks() {

  //javascript
  scrolltoview();


  
  return (
    <>
        <div id="workflow" className="w-full h-auto relative flex flex-col justify-center items-center scroll-mt-[150px] sm:scroll-mt-[80px] ">
        
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                <p className="leading-snug text-[35px] sm:text-[52px] font-[700]">How It <span className="text-[#F2630A]">Works</span></p>
                <br/>
                <div className="w-[150px] h-[4px] bg-[#F2630A] hidden sm:block"></div>
              
            </div>
            <img src={(checkscreenwidth()>640)? workflow:workflowmobile} className="w-[80%] sm:mt-[48px]  sm:w-[70%] z-[1]" />
            <img src={blurshade2} className="absolute w-[100%] sm:w-[70%] z-[0]" />
            <br/>
            
            <p className="text-[20px] sm:text-[36px] font-[600] sm:mt-[48px] sm:mb-[24px]  z-[1]">Need Medicines Now?</p>
            
            <Button content="Place Your Order Now →" theme="themeorange" specification="s2" additionalcss="mb-[15px] active:bg-orange-600 z-[1] sm:scale-[1] scale-[0.7]" link="/orderpage" />
            <br/>
            <br/>
        </div>
    </>
  )
}
