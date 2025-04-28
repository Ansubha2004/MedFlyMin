import React from 'react'
import clsx from 'clsx'

export default function Button({ content, theme, specification, additionalcss}) {

    //tailwindcss
    const common=`flex justify-center items-center rounded-[16px] text-[26px] cursor-pointer transition-all active:scale-[0.95] duration-100 ease-in`;

    const designs={
        'themeblack': 'bg-black text-white shadow-[2px_4px_16px_3px_rgba(0,0,0,0.28)]',
        'themeorange': 'bg-[#F2630A] text-white shadow-[7px_0px_25px_0px_rgba(0,0,0,0.25)]',
        'themewhite': 'bg-white text-black shadow-[5px_20px_25px_0px_rgba(0,0,0,0.25)]',
    }

    const specifications={
        s1: 'w-[200px] h-[50px]',
        s2: 'w-[380px] h-[70px]'
    }

  return (
    <button className={clsx(common,designs[theme], specifications[specification],additionalcss)}>
      {content}
    </button>
  )
}
