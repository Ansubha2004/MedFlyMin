import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import clsx from "clsx";
import Inputbox from "../../../Components/Inputbox.jsx";
import Button from "../../../Components/Button.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Phone } from "lucide-react";

import nameicon from "../../../assets/images/nameicon.png";
import emailicon from "../../../assets/images/emailicon.png";
import passwordicon from "../../../assets/images/passwordicon.png";
import verifypasswordicon from "../../../assets/images/verifypasswordicon.png";

import oricon from "../../../assets/images/oricon.png";
import Google from "../../../assets/images/Google.png";
import axios from "../../../hooks/useAxios.js";

export default function Registrationloginpage({ mode }) {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const phoneNumberRef = useRef();
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const phoneNumber = phoneNumberRef.current?.value;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/auth/register`,
        {
          name,
          email,
          password,
          phoneNumber,
        }
      );
      toast.success(res.data.message || "Registration successful");
      navigate("/orderpage");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`,
        {
          emailOrPhone: email,
          password,
        }
      );
      toast.success(res.data.message || "Login successful");
      navigate("/orderpage");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    }
  };

  const checkboxStyle = "w-[20px] h-[20px] rounded-[3px] mr-[10px]";

  return (
    <div className="relative z-[4] h-full w-full flex flex-col justify-center items-center scale-[0.8]">
      <br />
      <br />
      <p className="text-[40px] font-[700]">
        {mode === "register" ? "Create Your Account" : "Log In to Your Account"}
      </p>
      <p className="text-[24px] font-[600]">
        or{" "}
        <Link
          className="text-[#F2630A]"
          to={mode === "register" ? "/login" : "/register"}
        >
          {mode === "register"
            ? "Login to your existing account"
            : "Create a new Account"}
        </Link>
      </p>

      <form onSubmit={mode === "register" ? handleRegister : handleLogin}>
        <div className="w-[500px] h-auto p-[30px] bg-[#FFFFFF] rounded-[20px] shadow-[0px_0px_35px_0px_rgba(0,0,0,0.35)]  mt-6">
          {mode === "register" ? (
            <>
              <Inputbox
                label="Enter Full Name"
                id="Name"
                icon={nameicon}
                type="text"
                placeholder="eg: Amit Sen"
                ref={nameRef}
                mode="register"
              />
              <Inputbox
                label="Email Address"
                id="Email"
                type="email"
                icon={emailicon}
                placeholder="eg: name@gmail.com"
                ref={emailRef}
                mode="register"
              />
              <Inputbox
                label="Phone Number"
                id="Phone"
                type="tel"
                icon={<Phone size={20} />}
                placeholder="eg: 9845729646"
                ref={phoneNumberRef}
                mode="register"
              />
              <Inputbox
                label="Enter Password"
                id="Password"
                type="password"
                icon={passwordicon}
                placeholder="********"
                ref={passwordRef}
                mode="register"
              />
              <Inputbox
                label="Confirm Password"
                id="Confirmpassword"
                type="password"
                placeholder="********"
                icon={verifypasswordicon}
                ref={confirmPasswordRef}
                mode="register"
              />
              <label
                htmlFor="rememberRegister"
                className="flex justify-between items-center font-[Inter] text-[18px] my-[15px]"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberRegister"
                    className={clsx(checkboxStyle)}
                    required
                  />
                  Remember Me
                </div>
                <a href="#" className="text-[#F2630A]">
                  Forgot Your Password?
                </a>
              </label>
              <button
                type="submit"
                className="w-full mt-[25px] bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
              >
                Create Account →
              </button>
            </>
          ) : (
            <>
              <Inputbox
                label="Email Address"
                id="mail"
                icon={emailicon}
                type="text"
                placeholder="eg: name@gmail.com"
                ref={emailRef}
                mode="login"
              />
              <Inputbox
                label="Enter Password"
                id="password"
                icon={passwordicon}
                type="password"
                placeholder="********"
                ref={passwordRef}
                mode="login"
              />
              <label
                htmlFor="termsLogin"
                className="flex items-center font-[Inter] text-[18px] my-[15px]"
              >
                <input
                  type="checkbox"
                  id="termsLogin"
                  className={clsx(checkboxStyle)}
                  required
                />
                <p>
                  I agree to the{" "}
                  <span className="text-orange-500">Terms of Services</span> and{" "}
                  <span className="text-orange-500">Privacy Policy</span>
                </p>
              </label>
              <button
                type="submit"
                className="w-full mt-[25px] bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
              >
                Log In →
              </button>
            </>
          )}
          <img src={oricon} className="w-full my-[20px]" alt="or separator" />
          <Button
            content={
              mode === "register"
                ? "Sign Up with Google →"
                : "Log In with Google →"
            }
            theme="themewhite2"
            specification="s3"
            icon={Google}
            iconcss="w-[55px] pl-[30px]"
          />
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
      {message && <p className="mt-4 text-red-600">{message}</p>}
    </div>
  );
}
