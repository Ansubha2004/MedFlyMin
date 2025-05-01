import React from 'react'
import clsx from 'clsx';


export default function Inputbox({id,label,type,icon,mode,placeholder,additionalcss}) {
  return (
    <>
        <label htmlFor={id} className="block text-[17px] font-[500]">{label}</label>
        <div className={clsx("flex justify-start items-center rounded-[8px] border-[#010101B2] border-[2px] w-full h-[50px] border-box px-[20px]  my-[9px] group-focus:boder-[orange]",additionalcss)}> 
            <img src={icon} className={clsx("w-[26px] mr-[20px]")} />
            <input 
                type={type}
                id={id}
                required
                className={clsx("w-full outline-none")}
                placeholder={placeholder}

             />
        </div>
    </>
  )
}
