import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrolltoview from "../../../hooks/scrolltoview.jsx";
import Inputbox3 from "../../../Components/Inputbox3.jsx";
import Button from "../../../Components/Button.jsx"

export default function Contact() {
  //javascript
  scrolltoview();

  return (
    <>
      <div
        id="contactus"
        className="bg-[#FFF2E9] w-full h-auto relative flex flex-col justify-center items-center pb-[60px] sm:pb-[80px] scroll-mt-[80px] sm:scroll-mt-[0px]"
      >
        <br />
        <br />
        <div
          id="Heading"
          className="w-full h-auto flex flex-col justify-center items-center"
        >
          <p className="leading-snug text-[33px] sm:text-[52px] font-[700] text-center">
            Contact <span className="text-[#F2630A]">Us</span>
          </p>
          <br />
          <div className="w-[100px] hidden sm:block h-[4px] bg-[#F2630A] sm:mb-[24px]"></div>
          <br />
        </div>
        <form className=" w-[90%] flex flex-col justify-center items-center ">
          <Inputbox3
            label="Enter Full Name"
            id="Name"
            
            type="text"
            placeholder="Specify name"
            
            
          />
          <Inputbox3
            label="Email Address"
            id="Email"
            type="email"
            placeholder="Enter Mail Id"
            
           
          />
          <Inputbox3
            label="Message"
            id="Message"
            type="text"
            placeholder="Type Message"
            additionalcss="h-[150px] items-start pt-[15px]"
           
          />
          <br />
          <Button theme="themeorange" content="Submit" specification="s6" />
        </form>
      </div>
    </>
  );
}
