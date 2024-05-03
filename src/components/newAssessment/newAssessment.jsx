import React from 'react';
import { BsListTask } from "react-icons/bs";

function NewAssessment() {
  return (
    <div className="flex items-center w-[40vw] h-100 bg-blue-500 text-white font-sans rounded-lg p-5 relative mr-10">
     <div>
     <div className="flex items-center ">
        <BsListTask className="text-white text-5xl ml-2 mr-5" />
        <span className="text-6xl font-bold">0033</span>
      </div>
      <span className="text-2xl mt-5 mb-20">New Assessments</span>
     </div>
     <div className='flex'>
     <img src="/office-girl.png" alt="Small character" className="absolute h-24 right-[135px] bottom-36" />
      <div>
      <img src="/office-girl.png" alt="Main character" className="absolute h-48 right-5 bottom-24" />
      <button className="absolute right-24 bottom-5 bg-white text-blue-500 border-none rounded text-md py-2 px-4 cursor-pointer">
        VIEW DETAILS
      </button>
      </div>
     </div>
      
    </div>
  );
}

export default NewAssessment;
