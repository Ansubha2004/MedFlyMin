import React, { useState, useRef, useEffect } from 'react'
import Button from '../../../Components/Button.jsx'
import clsx from 'clsx'
import locationicon2 from '../../../assets/images/locationicon2.png'
import cartimage from '../../../assets/images/cartimage.gif'
import dummyimage from '../../../assets/images/dummyimage.png'
import { useNavigate } from 'react-router-dom'
import axios from '../../../hooks/useAxios'
import { toast } from 'react-toastify'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/auth/logout`);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch {
      toast.error('Error logging out');
    }
  };

  //tailwindcss
  const hoverbuttons='hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out'

  return (
    <nav className="bg-transparent font-[Inter] w-full min-h-auto flex justify-between items-center box-border px-4 sm:px-8 py-2  border-b-[1px] border-black/60 ">
      <span className="flex items-center gap-10">
        <img src="/logo.png" className="h-[75px] sm:h-[84px]" alt="Logo" />
        <Button content="Add Location" theme="themeorange" specification="s1" additionalcss='hover:opacity-[0.8] duration-100 linear text-[24px]' icon={locationicon2} iconcss="w-[26px] ml-3" />
      </span>
      <span className="text-[25px] font-[Inter] flex items-center gap-10">
        <a className={clsx(hoverbuttons)} href="#help">Need Help?</a>
        <a className="flex items-center" href="#cart">
          <p className={clsx(hoverbuttons)} >Cart</p>
          <img src={cartimage} className="h-[50px] ml-1 object-contain"  />
        </a>
        <div className="relative" ref={dropdownRef}>
          <div 
            className="w-[55px] h-[55px] rounded-[50%] border-transparent border-solid border-[2px] hover:scale-[1.1] hover:border-orange-600 transition-all duration-200 ease-out overflow-hidden active:scale-[0.9] cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src={dummyimage} className="w-[55px] object-contain" alt="Profile" />
          </div>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </span>
    </nav>
  )
}
