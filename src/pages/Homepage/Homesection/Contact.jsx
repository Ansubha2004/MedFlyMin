import React,{useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import scrolltoview from '../../../hooks/scrolltoview.jsx';



export default function Contact() {

  //javascript
  scrolltoview();

  return (
    <>
        <div id="contactus" className="w-full h-auto relative flex flex-col justify-center items-center overflow-hidden">
        <br/>
            <br/>
            <div id="Heading" className="w-full h-auto flex flex-col justify-center items-center">
                    <p className="leading-snug text-[52px] font-[700] text-center">Contact <span className="text-[#F2630A]">Us</span></p>
                    <br/>
                    <div className="w-[100px] h-[4px] bg-[#F2630A] "></div>
                    <br/>
                    <br/>
            </div>
        </div>
    </>
  )
}
