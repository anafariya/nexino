import React from 'react';

function NewAssessment() {
  return (
    <div className="flex items-center  shadow-xl w-[40vw] h-100 bg-blue-500 text-white font-sans rounded-lg p-5 relative mr-5">
     <div>
     <div className="flex items-center ">
        <img src="task-icon.png" alt="" className="absolute h-24 left-[15px] rounded-lg bottom-36" />
        <span className="text-5xl mt-10 font-semibold">0033</span>
      </div>
      <span className="text-xl absolute left-[20px] bottom-8">New Assessments</span>
     </div>
     <div className='flex'>
     <img src="/office-girl.png" alt="Small character" className="absolute h-24 right-[135px] bottom-36" />
      <div>
      <img src="/office-girl.png" alt="Main character" className="absolute h-48 right-5 bottom-24" />
      <button className="absolute font-semibold right-24 bottom-5 bg-white text-black border-none rounded text-sm py-2 px-4 cursor-pointer">
        VIEW DETAILS
      </button>
      </div>
     </div>
      
    </div>
  );
}

export default NewAssessment;
