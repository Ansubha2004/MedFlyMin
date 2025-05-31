import React, { forwardRef } from 'react';
import clsx from 'clsx';

const Inputbox = forwardRef(({ id, label, type, icon, placeholder, additionalcss }, ref) => {
  return (
    <div className="flex flex-col items-start w-[100%] sm:w-[70%] md:w-[50%] ">
      <label htmlFor={id} className="inter-font font-block text-orange-500 text-[14px] sm:text-[20px] leading-tight text-left sm:leading-none font-[500]">{label}</label>
      <div className={clsx("flex justify-start items-center rounded-[8px] bg-white border-zinc-400 border-[1px] w-full h-[50px] border-box px-[20px] mt-[15px] mb-[20px] sm:mb-[25px]", additionalcss)}>
        <input 
          ref={ref}  // Forwarding the ref here
          type={type}
          id={id}
          required
          className={clsx("w-full   outline-none ")}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
});

export default Inputbox;
