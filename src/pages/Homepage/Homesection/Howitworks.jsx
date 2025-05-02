import React from 'react'
import clsx from 'clsx';
import workflow from '../../../assets/images/workflow.png';
import blurshade2 from '../../../assets/designcomponents/blurshade2.png';
import Button from '../../../Components/Button.jsx';
import scrolltoview from '../../../hooks/scrolltoview.jsx';


export default function Howitworks() {

  //javascript
  scrolltoview();

  
  return (
    <>
        <div id="workflow" className="w-full h-auto relative flex flex-col justify-center items-center overflow-hidden">
        
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                <p className="leading-snug text-[52px] font-[700]">How It <span className="text-[#F2630A]">Works</span></p>
                <br/>
                <div className="w-[150px] h-[4px] bg-[#F2630A] "></div>
                <br/>
                <br/>
            </div>
            <img src={workflow} className="w-[80%] z-[1]" />
            <img src={blurshade2} className="absolute w-[80%] z-[0] " />
            <br/>
            <br/>
            <p className="text-[36px] font-[600] z-[1]">Need Medicines Now?</p>
            <br/>
            <Button content="Place Your Order Now →" theme="themeorange" specification="s2" additionalcss="mb-[15px] active:bg-orange-600 z-[1]"/>
            <br/>
            <br/>
        </div>
    </>
  )
}
