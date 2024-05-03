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
      <div className="flex mt-2 justify-around">
        <h1 className="font-semibold text-xl">Upcomings</h1>
        <h3 className="font-lg text-md underline text-blue-600">View All</h3>
      </div>
      <div className="flex flex-col items-center space-y-4 w-[230px] ml-[25px] mr-[2px]">
        {interviews.map((interview, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-lg rounded-lg px-1 my-1 py-1 space-x-2"
          >
            <div className={`${interview.color} text-black p-4 rounded-lg`}>
              <div className="text-md font-semibold">{interview.date}</div>
              <div>{interview.month}</div>
            </div>
            <div className="flex flex-col flex-grow">
              <div className="font-semibold text-sm">{interview.title}</div>
              <div className="text-gray-600 text-sm">
                Created by {interview.createdBy}
              </div>
              <div className="text-gray-600 text-xs">{interview.time}</div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-md py-2 px-4 rounded">
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default InterviewCardRight;
