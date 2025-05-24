import React from 'react'
import clsx from 'clsx'
import {useNavigate} from 'react-router-dom';



export default function Button({ content, theme, specification, additionalcss,link,icon,iconcss}) {

    //tailwindcss
    const common=`flex justify-center items-center  cursor-pointer transition-all active:scale-[0.7] sm:active:scale-[0.95] duration-100 ease-in`;

    const designs={
        'themeblack': 'bg-black text-white shadow-[2px_4px_16px_3px_rgba(0,0,0,0.28)]',
        'themeorange': 'bg-[#F2630A] text-white shadow-[3px_5px_11.5px_2px_rgba(0,0,0,0.40)]',
        'themeorange2': 'bg-[#F2630A] text-white',
        'themewhite': 'bg-white/50 text-black shadow-[15px_20px_20px_0px_rgba(0,0,0,0.25)] backdrop-blur-[3px]',
        'themewhite2': 'bg-white/50 text-black shadow-[0px_5px_18px_3px_rgba(0,0,0,0.25)] backdrop-blur-[3px]',
        'themewhitemobile': 'bg-white text-black shadow-[15px_20px_20px_0px_rgba(0,0,0,0.25)]'
    }

    const specifications={
        s1: 'sm:min-w-[200px] sm:h-[50px] min-w-[100px] h-[40px] rounded-[16px] ',
        s2: 'min-w-[380px] h-[70px] text-[24px] rounded-[16px]',
        s3: 'min-w-full h-[50px] text-[15px] sm:text-[21px] rounded-[8px] ',
        s4: 'h-[90%] rounded-l-full rounded-r-full w-1/5',
        s5: 'sm:w-[137px] w-[75px] sm:h-[55px] h-[35px] rounded-[10px] sm:rounded-[16px]'
    }

    //js\
    const navigate=useNavigate();
    const handleclick=(e)=>{
      e.preventDefault();
      if(link)
      {
        setTimeout(()=>{
          navigate(link);
        },"900");
      }
    }

  return (
    <button onClick={handleclick } className={clsx(common,designs[theme], specifications[specification],additionalcss)}>
      {content}
      <img src={icon} className={clsx(iconcss)} />
    </button>
  )
}
