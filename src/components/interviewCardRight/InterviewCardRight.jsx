import React from "react";

const interviews = [
  {
    date: "07",
    month: "Feb",
    title: "Interview with Designer",
    createdBy: "Stella",
    time: "10 A.M to 11 A.M",
    color: "bg-blue-200", 
  },
  {
    date: "07",
    month: "Feb",
    title: "Interview with PMO",
    createdBy: "Stephan",
    time: "10 A.M to 11 A.M",
    color: "bg-gray-200",
  },
  {
    date: "07",
    month: "Feb",
    title: "Interview with Net. Admin",
    createdBy: "Stella",
    time: "10 A.M to 11 A.M",
    color: "bg-blue-200",
  },
];

function InterviewCardRight() {
  return (
    <>
      <div className="flex w-[210px] my-3 justify-between">
        <h1 className="font-semibold text-lg ">Upcomings</h1>
        <h3 className="font-lg text-md underline text-blue-600 cursor-pointer">View All</h3>
      </div>
      <div className="flex flex-col items-center space-y-4 w-[210px] ml-[1px]">
        {interviews.map((interview, index) => (
          <div
            key={index}
            className="flex items-center px-1 my-1 py-1 space-x-1"
          >
            <div className={`${interview.color} text-black p-3 rounded-lg`}>
              <div className="text-[11.2px] font-[1.6px]">{interview.date}</div>
              <div className="text-[11.2px] font-[1.6px]">{interview.month}</div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="text-[11.4px] font-normal">{interview.title}</div>
              <div className="text-gray-600 text-[11.4px] font-light">
                Created by <span className="text-blue-400 font-normal">{interview.createdBy}</span>
              </div>
              <div className="text-gray-600 text-[11.4px] font-light">{interview.time}</div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-[11.4px] font-normal py-1 px-2 rounded">
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default InterviewCardRight;
