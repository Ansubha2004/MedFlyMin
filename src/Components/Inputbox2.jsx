import React from 'react'
import clsx from 'clsx';
import Button from '../Components/Button.jsx';

export default function Inputbox2({type,id,placeholder,additionalcss,icon}) {
  return (
    <>
        <label htmlFor={id} className={clsx("flex justify-between items-center rounded-l-full rounded-r-full border-[#00000060] border-[2px] w-4/6 h-[50px] border-box pl-[20px] pr-[3px] mb-[17px] group-focus:border-[orange]",additionalcss)}> 
            <div className="flex w-3/4">
                <img src={icon} className={clsx("w-[26px] mr-[20px]")} />
                <input 
                    type={type}
                    id={id}
                    required
                    className={clsx("w-full outline-none ")}
                    placeholder={placeholder}
                
                />
            </div>
            <Button theme="themeorange2" content="Search" specification="s4"/>
        </label>
    </>
  )
}
