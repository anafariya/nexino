import React from 'react'
import ApplicantInfo from '../applicantInfo/ApplicantInfo'
import NewAssessment from '../newAssessment/newAssessment'
function Header2() {

  return (
    <>
    <div className='flex justify-between mt-10'>
        <div className='ml-10'>
            <h1 className='font-bold'>HR Employee</h1>
            <h3 className='font-semibold'>Enjoy your selecting potential candidate Tracking and Management System</h3>
        </div>
        <div>
            <button className='text-white h-[40px] mr-20 w-[90px]  cursor-pointer rounded-lg bg-blue-600'>Task Details</button>
        </div>
    </div>
    <div className='flex justify-between mt-20'>
        <ApplicantInfo/>
        <NewAssessment/>
    </div>
   
    </>
  )
}

export default Header2