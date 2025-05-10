import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import Inputbox from '../../../Components/Inputbox.jsx';
import nameicon from '../../../assets/images/nameicon.png';
import emailicon from '../../../assets/images/emailicon.png';
import passwordicon from '../../../assets/images/passwordicon.png';
import verifypasswordicon from '../../../assets/images/verifypasswordicon.png';
import Button from '../../../Components/Button.jsx';
import oricon from '../../../assets/images/oricon.png';
import Google from '../../../assets/images/Google.png';
import { Link } from 'react-router-dom';
import axios from '../../../hooks/useAxios.js'; // your custom Axios instance


export default function Registrationloginpage({ mode }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post('/auth/register', { name, email, password });
      toast.success(res.data.message || "Registration successful");
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await axios.post('/auth/login', { email, password });
      setMessage(res.data.message || "Login successful");
      // Optionally store token/res data
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  const common = 'w-[20px] h-[20px] rounded-[3px] mr-[10px]';

  return (
    <div className="relative z-[4] h-full w-full flex flex-col justify-center items-center">
      <br/><br/>
      <p className="text-[40px] font-[700] ">{mode === 'register' ? "Create Your Account" : "Log In to your Account"}</p>
      <p className="text-[24px] font-[600]">or <Link className="text-[#F2630A]" to={mode === "register" ? '/login' : '/register'}>{mode === "register" ? "Login to your existing account" : "Create a new Account"}</Link></p>
      
      <form onSubmit={mode === "register" ? handleRegister : handleLogin}>
        <div className="w-[500px] h-auto p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.35)] scale-[0.9]">
          {
            mode === "register" ? (
              <>
                <Inputbox label="Enter Full Name" id="Name" icon={nameicon} type="text" placeholder="eg: Amit Sen" ref={nameRef} mode="register" />
                <Inputbox label="Email Address" id="Email" type="text" icon={emailicon} placeholder="eg: name@gmail.com" ref={emailRef} mode="register" />
                <Inputbox label="Enter Password" id="Password" type="password" icon={passwordicon} placeholder="********" ref={passwordRef} mode="register" />
                <Inputbox label="Confirm Password" id="Confirmpassword" type="password" placeholder="********" icon={verifypasswordicon} ref={confirmPasswordRef} mode="register" />
                <label htmlFor="checkbox" className="flex justify-between items-center font-[Inter] text-[18px] my-[15px]">
                  <div className="flex items-center">
                    <input type="checkbox" id="checkbox" className={clsx(common)} required />
                    Remember Me
                  </div>
                  <a href="#" className="text-[#F2630A]">Forgot Your Password?</a>
                </label>
                <Button content="Create Account →" theme="themeorange" specification="s3" additionalcss="active:bg-orange-600 mt-[25px]" />
              </>
            ) : (
              <>
                <Inputbox label="Email Address" id="mail" icon={emailicon} type="text" placeholder="eg: name@gmail.com" ref={emailRef} mode="login" />
                <Inputbox label="Enter Password" id="password" icon={passwordicon} type="password" placeholder="********" ref={passwordRef} mode="login" />
                <label htmlFor="checkbox" className="flex items-center font-[Inter] text-[18px] my-[15px]">
                  <input type="checkbox" id="checkbox" className={clsx(common)} required />
                  <p>I agree to the <span className="text-orange-500">Terms of Services</span> and <span className="text-orange-500">Privacy Policy</span></p>
                </label>
                <Button content="Log In →" theme="themeorange" specification="s3" additionalcss="active:bg-orange-600 mt-[25px]" />
              </>
            )
          }
          <img src={oricon} className="w-full my-[20px]" alt="or" />
          <Button content={mode === "register" ? "Sign Up with Google →" : "Log In with Google →"} theme="themewhite2" specification="s3" icon={Google} iconcss="w-[55px] pl-[30px]" />
        </div>
      </form>
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
