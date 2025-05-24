import React from "react";
import clsx from "clsx";
import Button from "../../../Components/Button.jsx";
import locationicon2 from "../../../assets/images/locationicon2.png";
import Prescriptionicon from "../../../assets/images/Prescriptionicon.png";
import uploadicon from "../../../assets/images/uploadicon.png";

export default function ordertrack() {
  return (
    <div className="w-full h-auto flex flex-col  items-center">
      <div className="w-full h-auto flex justify-between items-center mb-[24px]">
        <div
          id="prescription"
          className="bg-[#FFEEE4]  w-full sm:mr-15 h-[60px] sm:min-h-[90px] rounded-[10px] border-[1px] border-solid border-[#00000030] flex items-center justify-around"
        >
          <img
            src={Prescriptionicon}
            className="w-[40px] sm:w-[50px] object-fit"
          />
          <p className="sm:block hidden font-[600] text-[20px]">
            Order with your <span className="text-[#F2630A]">Prescription</span>
          </p>
          <p className="sm:hidden font-[600] text-[16px]">
            Upload your <span className="text-[#F2630A]">prescription</span>
          </p>
          <p className="sm:block hidden text-[#00000090] font-[15px]">
            Upload it in .pdf format
          </p>
          <button className="w-[25px] object-contain sm:hidden transition-all duration-200 ease-in-out active:scale-[0.9] ">
            <img src={uploadicon} />
          </button>
          <Button
            content="Upload"
            theme="themeorange2"
            specification="s1"
            icon={uploadicon}
            iconcss="w-[26px] h-[26px] ml-5"
            additionalcss="sm:flex hidden text-[20px] font-[500]"
          />
        </div>
        <Button
          theme="themeblack"
          content="Track Your Order"
          specification="s1"
          icon={locationicon2}
          iconcss="w-[23px] ml-3"
          additionalcss="hidden sm:flex text-[17px]"
        />
      </div>

      <div className="w-full hidden mt-[24px] sm:flex  justify-between items-center gap-6 p-4">
        {[
          "Upload a photo of your prescription",
          "Add your delivery address and place the order",
          "Your nearest pharmacy will call you to confirm the order",
          "Your medicines will get delivered within minutes",
        ].map((content, index) => (
          <div key={index} className="flex items-center  max-w-[350px] ">
            <div className="min-h-[50px] min-w-[50px] rounded-full bg-orange-200 text-[#F2630A] border-[1px] border-solid border-[#00000030] font-semibold text-[27px] flex justify-center items-center mr-7 hover:scale-[1.1] hover:border-orange-600 transition-all duration-200 ease-out">
              {index + 1}
            </div>
            <p className="text-[14px]">{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
