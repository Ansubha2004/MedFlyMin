import React from 'react'
import clsx from 'clsx';
import Button from '../Components/Button.jsx';

export default function Inputbox2({type,id,placeholder,additionalcss,icon,reference}) {
  return (
    <>
        <label htmlFor={id} className={clsx("flex justify-between items-center rounded-[10px] sm:rounded-l-full sm:rounded-r-full border-[#00000060] border-[2px] w-full sm:w-4/6 h-[50px] border-box pl-[20px] pr-[3px] mb-[17px] group-focus:border-[orange]",additionalcss)}> 
            <div className="flex  w-full sm:w-3/4">
                <img src={icon} className={clsx("hidden sm:block w-[26px] mr-[20px]")} />
                <input 
                    type={type}
                    id={id}
                    required
                    className={clsx("w-full outline-none ")}
                    placeholder={placeholder}
                    ref={reference}
                
                />
                 <button><img src={icon} className={clsx("sm:hidden w-[26px] mr-[20px]")} /></button>
            </div>
            <Button theme="themeorange2" content="Search" specification="s4" additionalcss="hidden sm:block"/>
        </label>
    </>
  )
}
