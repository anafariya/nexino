import React from "react";

function MeetingInfo({ employee }) {
  return (
    <div className="bg-white flex w-[900px] shadow-md rounded-lg p-4 gap-4">
      <div className="flex flex-col">
        <img
          src={employee.img}
          alt={employee.name}
          className="w-16 h-16 rounded-full border-2 ml-5 mb-4 mt-10 border-blue-400"
        />

        <h3 className="font-md text-md">{employee.name}</h3>
        <p className="text-gray-600 text-[12px] whitespace-nowrap border-b border-gray-500 my-[13px]">{employee.role}</p>
        <div className="text-center">
          <div className="flex">
            <div className="text-blue-500 px-1 text-[11px] whitespace-nowrap border-r border-gray-500">{employee.date}</div>
            <div className="text-gray-500 whitespace-nowrap text-[11px]">{employee.time}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
      <div className="col-span-1">
      <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          1st Level:{" "}
          <span className="text-[11px] font-normal ">{employee.levels.first}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium"> 
          2nd Level:{" "}
          <span className="text-[11px] font-normal ">{employee.levels.second}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          3rd Level:{" "}
          <span className="text-[11px] font-normal ">{employee.levels.third}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          Meet Via: <span className="text-[11px] font-normal ">G-Meet</span>
        </p>
      </div>
      <div className="col-span-1">
      <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          Interviewer:{" "}
          <span className="text-[11px] font-normal  ">{employee.interviews.first}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          Interviewer:{" "}
          <span className="text-[11px] font-normal ">{employee.interviews.second}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          Interviewer:{" "}
          <span className="text-[11px] font-normal ">{employee.interviews.third}</span>
        </p>
        <p className="border-gray-300 border-2 p-2 text-[12px] font-medium">
          Attendees:{" "}
          <span className="text-[11px] font-normal ">{employee.interviews.attendees}</span>
        </p>
      </div>
      <div className="flex">
          <button className="bg-white text-blue-500 border text-[11px]  mt-2 font-normal border-blue-500 whitespace-nowrap ml-2 h-8 text-sm w-full rounded px-3 py-1">
            Reschedule Meeting
          </button>
          <button className="bg-blue-500 whitespace-nowrap text-[11px] mt-2  font-normal h-8 ml-8 text-white text-sm w-full rounded px-3 py-1">
            Join Meeting
          </button>
        </div>
      </div>
       
    
    </div>
  );
}

export default MeetingInfo;
