import React from 'react'
import homefootericon from '../../../assets/images/homefootericon.png'
import searchfootericon from '../../../assets/images/searchfootericon.png'
import profilefootericon from '../../../assets/images/profilefootericon.png'


function footbar() {


    //tailwind css
    let common='h-[35px] p-2';


  return (
    <footbar className="fixed bottom-0 sm:hidden h-[60px] w-full bg-[#F5F5F5] flex justify-around items-center">
      <a href="/"><img src={homefootericon} className="h-[35px]" /></a>
      <a href="/"><img src={searchfootericon} className="h-[35px]" /></a>
      <a href="/"><img src={profilefootericon} className="h-[35px]" /></a>
    </footbar>
  )
}

export default footbar
