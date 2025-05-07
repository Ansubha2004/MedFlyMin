import React from 'react'
import clsx from 'clsx'
import {useNavigate} from 'react-router-dom';



export default function Button({ content, theme, specification, additionalcss,link,icon,iconcss}) {

    //tailwindcss
    const common=`flex justify-center items-center  cursor-pointer transition-all active:scale-[0.95] duration-100 ease-in`;

    const designs={
        'themeblack': 'bg-black text-white shadow-[2px_4px_16px_3px_rgba(0,0,0,0.28)]',
        'themeorange': 'bg-[#F2630A] text-white shadow-[3px_5px_11.5px_2px_rgba(0,0,0,0.40)]',
        'themewhite': 'bg-white/50 text-black shadow-[15px_20px_20px_0px_rgba(0,0,0,0.25)] backdrop-blur-[3px]',
        'themewhite2': 'bg-white/50 text-black shadow-[0px_5px_18px_3px_rgba(0,0,0,0.25)] backdrop-blur-[3px]'
    }

    const specifications={
        s1: 'min-w-[200px] h-[50px] text-[24px] rounded-[16px]',
        s2: 'min-w-[380px] h-[70px] text-[24px] rounded-[16px]',
        s3: 'min-w-full h-[50px] text-[21px] rounded-[8px] '
    }

    //js\
    const navigate=useNavigate();
    const handleclick=(e)=>{
      e.preventDefault();
      setTimeout(()=>{
        navigate(link);
      },"900");
    }

  return (
    <button onClick={handleclick} className={clsx(common,designs[theme], specifications[specification],additionalcss)}>
      {content}
      <img src={icon} className={clsx(iconcss)} />
    </button>
  )
}
