import React from 'react'
import homefootericon from '../../../assets/images/homefootericon.png'
import searchfootericon from '../../../assets/images/searchfootericon.png'
import profilefootericon from '../../../assets/images/profilefootericon.png'
import clsx from 'clsx'

function footbar({handleClick}) {


    //tailwind css
    let common='w-1/3 h-full flex justify-center items-center active   ';


    //js
    

  return (
    <footer className="fixed bottom-0 sm:hidden h-[60px] w-full bg-[#F5F5F5] flex justify-around items-center">
      <a href="/" className={clsx(common)}><img src={homefootericon} className="h-[35px]" /></a>
      <button onClick={handleClick} href="/" className={clsx(common)}><img src={searchfootericon} className="h-[35px]" /></button>
      <a href="/profile" className={clsx(common)}><img src={profilefootericon} className="h-[35px]" /></a>
    </footer>
  )
}

export default footbar
