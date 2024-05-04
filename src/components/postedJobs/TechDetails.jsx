import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import { HiArrowUp } from "react-icons/hi"; 

export default function TechDetails({ title, img, developers }) {
  return (
    <div className="shadow-xl mb-10 w-[200px] bg-white rounded-lg">
      {" "}
      <div className="flex gap-1 items-center">
        {" "}
        <img className="h-11 w-11 rounded-full" src={img} alt={title} />
        <div className="text-[14px] font-normal">{title}</div>
        <div>
          <AiOutlineMore size={18} />
        </div>
      </div>
      <div className="border-[1px] my-2  border-gray-400"></div>
      <div className="text-[12.2px] font-[1.1px]">Senior Developers</div>
      <div className="bg-blue-400 relative my-3 ml-[52px] text-center text-2xl p-[45px] text-white rounded-lg w-[30px] h-[30px]">
        {" "}
        <span className="absolute bottom-7 right-6">256</span>
      </div>
      <div className="text-[12.5px] font-[1.3px]">Total Applicants</div>
      <div className="border-[1px] my-3 border-gray-400"></div>
      <div className="flex items-center mb-5">
        <HiArrowUp size={20} color="blue" />
        <span className="ml-2 text-xs font-light tracking-tight whitespace-nowrap"><span className="text-blue-600 font-medium">28%</span> vs Last Month</span>
        <span className="ml-5 text-xs tracking-tight font-light">6 mins ago</span>
      </div>
    </div>
  );
}
