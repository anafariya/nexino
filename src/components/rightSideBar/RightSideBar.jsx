import React from 'react'
import ActivityCardRight from '../activityCardRight/ActivityCardRight'
import InterviewCardRight from '../interviewCardRight/InterviewCardRight'
import HiringCandidatesRight from '../hiringCandidatesRight/HiringCandidatesRight'

export default function RightSideBar() {
  return (
    <div>
      <img src="./calendar.png" alt="" className='w-100 p-10 shadow-lg mt-[10px] mr-10' />
     
      <InterviewCardRight/>
      <ActivityCardRight/>
      <HiringCandidatesRight/>
    </div>
  )
}
