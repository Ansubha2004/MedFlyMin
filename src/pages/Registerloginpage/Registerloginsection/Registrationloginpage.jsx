import React from 'react'
import clsx from 'clsx';
import Inputbox from '../../../Components/Inputbox.jsx';
import nameicon from '../../../assets/images/nameicon.png';
import emailicon from '../../../assets/images/emailicon.png';
import passwordicon from '../../../assets/images/passwordicon.png';
import verifypasswordicon from '../../../assets/images/verifypasswordicon.png';
import Button from '../../../Components/Button.jsx';
import oricon from '../../../assets/images/oricon.png';
import Google from '../../../assets/images/google.png';
import { Link } from 'react-router-dom';


export default function Registrationloginpage({mode}) {

  //tailwindcss
  const common='w-[20px] h-[20px] rounded-[3px] mr-[10px]';


  



  return (
    <>
      <div className="relative z-[4] h-full w-full flex flex-col justify-center items-center">
        <br/>
        <br/>
        <p className="text-[40px] font-[700] ">{mode=='register'?"Create Your Account":"Log In to your Account"}</p>
        <p className="text-[24px] font-[600]">or <Link className="text-[#F2630A]" to={mode=="register"?'/login':'/register'}>{mode=="register"?"Login to your existing account":"Create a new Account"}</Link></p>
        <div className="w-[500px] h-auto border-box p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.35)] transfrom scale-[0.9]">
          {
            mode=="register"?
            (<div>
              <Inputbox label="Enter Full Name" id="Name" icon={nameicon} type="text" placeholder="eg: Amit Sen" mode="register"/>
              <Inputbox label="Email Address" id="Email" type="text" icon={emailicon} placeholder="eg: name@gmail.com" mode="register"/>
              <Inputbox label="Enter Password" id="Password" type="password" icon={passwordicon} placeholder="********" mode="register"/>  
              <Inputbox label="Confirm Password" id="Confirmpassword" type="password" placeholder="********" icon={verifypasswordicon} mode="register"/>
              <label htmlFor="checkbox" className="flex justify-between w-full items-center font-[Inter] text-[18px] my-[15px]">
                <div className="flex items-center">
                <input type="checkbox" id="checkbox" className={clsx(common)} required/>
                Remember Me
                </div>
                <a href="" className="text-[#F2630A] active:scale-[0.95] transition-all duration-200 ease-out">Forgot Your Password?</a>
              </label>
              <Button content="Create Account →" theme="themeorange" specification="s3" additionalcss="active:bg-orange-600 mt-[25px]" link=""/>
              <img src={oricon} className="w-full my-[20px]"/>
              <Button content={`Sign Up with Google →`} theme="themewhite2" specification="s3" icon={Google} iconcss="w-[55px] pl-[30px]" link=""/>
            </div>
            )
            :
            (
              <div>
                <Inputbox label="Email Address" id="mail" icon={emailicon} type="text" placeholder="eg: name@gmail.com" mode="login"/>
                <Inputbox label="Enter Password" id="password" icon={passwordicon} type="text" placeholder="********" mode="login"/>
                <label htmlFor="checkbox" className="flex items-center font-[Inter] text-[18px] my-[15px]">
                  <input type="checkbox" id="checkbox" className={clsx(common)} required/>
                  <p>I agree to the <span className="text-orange-500">Terms of Services</span> and <span className="text-orange-500">Privacy Policy</span></p>
                </label>
                <Button content="Log In →" theme="themeorange" specification="s3" additionalcss="active:bg-orange-600 mt-[25px]" link=""/>
                <img src={oricon} className="w-full my-[20px]"/>
                <Button content="Log In with Google →" theme="themewhite2" specification="s3" icon={Google} iconcss="w-[55px] pl-[30px]" link=""/>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
