import React from 'react'
import MeetingInfo from '../meetingInfo/MeetingInfo'
import PostedJobs from '../postedJobs/PostedJobs';
import CandidateStatus from '../candidateStatus/CandidateStatus';

function HrDashboard() {
    const employees = [
        {
          id: 1,
          name: "John Smith",
          role: "Senior Python Developer",
          levels: { first: "7/10", second: "6/10", third: "Waiting" },
          interviews: { first: "Stella", second: "Smith", third: "Stephan", attendees: "Johnson" },
          date: "19th Feb 2024",
          time: "10.30 A.M",
          img: "/ana1.jpg"
        },
        {
          id: 2,
          name: "Jane Doe",
          role: "Frontend Developer",
          levels: { first: "8/10", second: "7/10", third: "Scheduled" },
          interviews: { first: "Alison", second: "Mike", third: "Nancy", attendees: "Clark" },
          date: "20th Feb 2024",
          time: "11.00 A.M",
          img: "/ana2.jpg"
        }
      ];
      
  return (
    <>
    <div className='w-[1000px]'>

    
    <div>
        <h1 className='font-semibold text-left ml-10 my-10'>Today Interview Meetings Info</h1>
        <div className="flex overflow-x-auto py-4 space-x-4 px-4">
      {employees.map(employee => (
        <MeetingInfo key={employee.id} employee={employee} />
      ))}
    </div>
    </div>
    <PostedJobs/>
    <CandidateStatus/>
    </div>
    </>
  )
}

export default HrDashboard