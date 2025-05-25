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

  const hoverbuttons = 'hover:text-[#F2630A] hover:scale-[1.05] active:scale-[0.95] border-b-[2px] border-transparent hover:border-[#F2630A] transition-all duration-200 ease-out';

  return (
    <nav className="roboto-font sm:relative fixed z-[2] bg-[#F5F5F5]  sm:bg-transparent font-[Inter] w-full flex justify-between items-center px-5 sm:px-8 py-2 sm:border-b sm:border-black/60">
      <div className="flex items-center gap-6">
        <img src="/logo.png" alt="Logo" className="h-[60px] sm:h-[75px]" />
        <Button 
          content="Add Location" 
          theme="themeorange" 
          specification="s1" 
          additionalcss="hover:opacity-80 duration-100 text-[18px] sm:text-[24px] scale-90 hidden sm:flex" 
          icon={locationicon2} 
          iconcss="w-[22px] sm:w-[26px] ml-3" 
        />
      </div>

      <div className="text-[16px] sm:text-[20px] flex items-center gap-6 sm:gap-10 relative" ref={dropdownRef}>
        <a href="#help" className={clsx(hoverbuttons,"hidden sm:block")}>Need Help?</a>
        <a href="#cart" className="flex items-center ">
          <p className={clsx(hoverbuttons,"hidden sm:block")}>Cart</p>
          <img src={cartimage} alt="Cart" className="h-[40px] rounded-xl border-solid border-[1px] border-brown-700 sm:border-none ml-1 object-contain active:scale-[0.95] transition-all duration-150 ease-in-out " />
        </a>

        <div 
          className="w-[45px] h-[45px] sm:w-[55px] hidden sm:block sm:h-[55px] rounded-full overflow-hidden border-2 border-transparent hover:border-orange-600 transition-transform duration-200 hover:scale-110 active:scale-90 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={dummyimage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {isDropdownOpen && (
          <div className="absolute top-[65px] right-0 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
