import React, { forwardRef } from 'react';
import clsx from 'clsx';

const Inputbox = forwardRef(({ id, label, type, icon, placeholder, additionalcss }, ref) => {
  return (
    <>
      <label htmlFor={id} className="block text-[14px] leading-tight sm:leading-none font-[500]">{label}</label>
      <div className={clsx("flex justify-start items-center rounded-[8px] border-[#010101B2] border-[2px] w-full h-[38px] sm:h-[50px] border-box px-[20px] my-[9px] group-focus:boder-[orange]", additionalcss)}>
        <img src={icon} className={clsx("w-[13px] sm:w-[26px] mr-[13px] sm:mr-[20px]")} />
        <input 
          ref={ref}  // Forwarding the ref here
          type={type}
          id={id}
          required
          className={clsx("w-full outline-none ")}
          placeholder={placeholder}
        />
      </div>
    </>
  );
});

export default Inputbox;
