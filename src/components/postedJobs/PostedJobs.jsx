import React from 'react'
import { IoFilterSharp } from "react-icons/io5";
import TechDetails from './TechDetails';

function PostedJobs() {
  return (
    <div className='w-[950px] ml-5  shadow-xl'>
        <div className='header flex justify-between my-10'>
            <h1 className='font-semibold text-lg ml-5'>Posted Jobs</h1>
            <h3 className='underline text-blue-700 cursor-pointer'>View all</h3>
            <form className="flex-1 max-w-md">
                <div className="relative">
                    <input type="search" id="default-search"
                        className="block w-[250px] py-1 px-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Search" required />
                    <div className="absolute inset-y-0 right-[200px] flex items-center pr-2 pointer-events-none">
                        <svg className="w-4 h-4  cursor-pointer text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                </div>
                <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only">Search</label>
            </form>
            <button>
                <div className='flex justify-between gap-5 mr-10'>
                <IoFilterSharp color='blue' size={24} /> Filters
                </div>
                </button>
    
        </div>
        <div className='flex flex-row gap-20 ml-10 text-gray-800'>
            <h3 className='cursor-pointer'>Active Jobs</h3>
            <h3 className='cursor-pointer'>Pending Jobs</h3>
        </div>
        <div class="border-[1px] my-2 border-gray-600" ></div>
        <div className='flex gap-[35px]'>
        <TechDetails title="Python Developers" img="/python.jpg" developers={256} />
        <TechDetails title="Angular Developers" img="/angular.png" developers={256} />
        <TechDetails title="Java Developers" img="/java.jpg" developers={256} />
        <TechDetails title="UI-UX Designers" img="/ui-ux.jpeg" developers={256} />
        </div>
    </div>
  )
}

export default PostedJobs