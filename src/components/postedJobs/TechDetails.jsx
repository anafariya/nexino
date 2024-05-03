import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { HiArrowUp } from "react-icons/hi"; 

export default function TechDetails({ title, img, developers }) {
  return (
    <div className="shadow-xl mb-10 p-2 bg-white rounded-lg">
      {" "}
      <div className="flex gap-1 items-center">
        {" "}
        <img className="h-12 w-12 rounded-full" src={img} alt={title} />
        <div className="text-lg">{title}</div>
        <div>
          <AiOutlineMore size={24} />
        </div>
      </div>
      <div className="border-[1px] my-5 border-gray-400"></div>
      <div>Senior Developers</div>
      <div className="bg-blue-400 my-3 ml-10 text-center text-2xl p-[55px] text-white rounded-lg w-40 h-40">
        {" "}
        256
      </div>
      <div className="mb-10">Total Applicants</div>
      <div className="border-[1px] my-5 border-gray-400"></div>
      <div className="flex items-center mb-5">
        <HiArrowUp size={24} color="blue" />
        <span className="ml-2 text-sm">28% vs Last Month</span>
        <span className="ml-10 text-sm">6 mins ago</span>
      </div>
    </div>
  );
}
