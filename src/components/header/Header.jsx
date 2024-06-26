import React from 'react';
import { TbBrightnessUp } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

function Header() {
  return (
    <>
    <div className="flex h-10vh items-center justify-between shadow-xl mt-5 ml-[50px]">
        <div className="flex items-center space-x-2">
            <img src="/nexino-logo.png" alt="Nexino" className="h-10 ml-1" />
            
            <form className="flex-1 max-w-md">
                <div className="relative">
                    <input type="search" id="default-search"
                        className="block w-full py-[6px] px-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Search" required />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                </div>
                <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only">Search</label>
            </form>
        </div>
        <div className='w-[35vw] header-icons flex justify-between'>
            <TbBrightnessUp className='cursor-pointer' size="23" />
            <FaRegComment className='cursor-pointer' size="23" />
            <IoMdNotificationsOutline className='cursor-pointer' size="23" />
            <IoSettingsOutline className='cursor-pointer' size="23" />
            <img class="w-9 h-9 cursor-pointer mr-5 rounded-full" src="header-girl.jpg" alt="Rounded avatar"/>
        </div>
    </div>
    </>
  );
}

export default Header;
