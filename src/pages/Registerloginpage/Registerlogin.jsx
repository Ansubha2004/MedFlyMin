import React from 'react'
import Navbar from './Registerloginsection/Navbar.jsx';
import Registrationloginpage from './Registerloginsection/Registrationloginpage.jsx';
import background2 from '../../assets/designcomponents/background2.png';
import blurshade3 from '../../assets/designcomponents/blurshade3.png';
import {loginregistermode} from '../../hooks/loginregistermode.jsx';


export default function Register() {

  //js
  const mode=loginregistermode();
  
  return (
    <>
        <Navbar mode={mode}/>
        <main className="relative w-screen min-h-screen flex justify-center items-center bg-[#FFF2E9]">
            <Registrationloginpage mode={mode}/>
            <img src={background2} className="fixed z-[1] top-0 h-screen w-screen"/>
            <img src={blurshade3} className="fixed z-[0] top-0 h-screen w-screen"/>
        </main>
    </>
  )
}
