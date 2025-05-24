import React,{useRef} from "react";
import Navbar from "./Orderpagesection/Navbar.jsx";
import Section1 from "./Orderpagesection/section1.jsx";
import Ordertrack from "./Orderpagesection/ordertrack.jsx";
import Scrolloffersection from "./Orderpagesection/scrolloffersection.jsx";
import Section2 from "./Orderpagesection/section2.jsx";
import advertise from "../../assets/images/advertise.png";
import Footbar from "./Orderpagesection/footbar.jsx";
import Button from "../../Components/Button.jsx";
import truckicon from "../../assets/images/truckicon.png"

export default function Orderpage() {


  //js
  const searchref=useRef(null);

  return (
    <div className="relative flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-1 w-full  overflow-x-hidden relative border-box pt-[100px] sm:pt-0 px-[20px] sm:px-[50px]">
        <Section1 reference={searchref} />
        <Ordertrack />
        <Scrolloffersection />
        <Section2 />
      </main>
      <div className="w-full mb-[48px] overflow-hidden bg-[#B528971A] min-h-[260px] hidden sm:flex justify-center items-center">
        <img src={advertise} className="h-[194px] object-fit" />
      </div>
      <p className="font-[600] text-[18px] sm:text-[32px] border-box px-[20px] sm:px-[50px]">
        Categories
      </p>
      <br />
      <div className="box-border px-[20px] sm:px-[50px]  w-full h-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
        {[
          "Fever & Cold",
          "Diabetes Care",
          "Health & BP Care",
          "Sexual Wellness",
          "Personal Care",
          "Pain Relief",
          "Digestive Health",
        ].map((content, index) => (
          <div
            key={index}
            className="min-h-[40px] flex justify-center items-center rounded-[8px] border-solid border-[1px] border-black hover:scale-[1.01] active:scale-[0.99] transition-all duration-100 linear"
          >
            <p className=" text-[12px] sm:text-lg  font-medium ">{content}</p>
          </div>
        ))}
      </div>
     
      <div className="px-[20px] sm:hidden w-full mt-[24px] mb-[40px]">
        <Button
          specification="s3"
          content="Free Delivery above Rs. 500"
          theme="themeorange2"
          icon={truckicon}
          iconcss="w-[40px] mr-4"
          additionalcss="active:scale-[0.95] flex-row-reverse"
        />
      </div>
      <br/>
      <br/>
      <Footbar handleClick={()=>searchref.current?.focus()} />
    </div>
  );
}
