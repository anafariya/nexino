import React from "react";

function MeetingInfo({ employee }) {
  return (
    <div className="bg-white flex w-[900px] shadow-md rounded-lg p-4 gap-4">
      <div className="flex flex-col">
        <img
          src={employee.img}
          alt={employee.name}
          className="w-16 h-16 rounded-full border-2 ml-5 mt-10 border-blue-400"
        />

        <h3 className="font-semibold text-lg">{employee.name}</h3>
        <p className="text-gray-600 border-b border-gray-500 my-[5px]">{employee.role}</p>
        <div className="text-center">
          <div className="flex">
            <div className="text-blue-500 font-xs border-r border-gray-500">{employee.date}</div>
            <div className="text-gray-500 font-xs">{employee.time}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
      <div className="col-span-1">
      <p className="border-gray-300 border-2 p-2">
          1st Level:{" "}
          <span className="font-semibold">{employee.levels.first}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          2nd Level:{" "}
          <span className="font-semibold">{employee.levels.second}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          3rd Level:{" "}
          <span className="font-semibold">{employee.levels.third}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          Meet Via: <span className="font-semibold">G-Meet</span>
        </p>
      </div>
      <div className="col-span-1">
      <p className="border-gray-300 border-2 p-2">
          Interviewer:{" "}
          <span className="font-semibold ">{employee.interviews.first}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          Interviewer:{" "}
          <span className="font-semibold">{employee.interviews.second}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          Interviewer:{" "}
          <span className="font-semibold">{employee.interviews.third}</span>
        </p>
        <p className="border-gray-300 border-2 p-2">
          Attendees:{" "}
          <span className="font-semibold">{employee.interviews.attendees}</span>
        </p>
      </div>
      <div className="flex">
          <button className="bg-white text-blue-500 border border-blue-500 whitespace-nowrap ml-2 h-10 text-sm w-full rounded px-4 py-2">
            Reschedule Meeting
          </button>
          <button className="bg-blue-500 whitespace-nowrap h-10 ml-10 text-white text-sm w-full rounded px-4 py-2">
            Join Meeting
          </button>
        </div>
      </div>
       
    
    </div>
  );
}

export default MeetingInfo;
