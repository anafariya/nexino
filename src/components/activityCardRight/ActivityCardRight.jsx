import React from "react";

function ActivityCardRight() {
  const ActivityCard = ({ imgSrc, name, role, description, time }) => (
    <div className="flex items-center bg-white shadow-lg rounded-lg py-2 px-1 mb-4">
      <img src={imgSrc} className="w-[50px] h-[50px] rounded-full mr-1 object-cover" alt={name} />
      <div className="flex flex-col">
        <div className="flex items-baseline space-x-3">
          <h1 className="text-[11.7px] mt-2 font-semibold tracking-tight">{name}</h1>
          <span className="text-blue-500 text-[11.2px] tracking-tighter font-medium">{role}</span>
        </div>
        <h4 className="text-[11.4px] font-normal whitespace-nowrap my-1">{description}</h4>
        <h6 className="text-gray-600 text-[11.3px] font-normal">{time}</h6>
      </div>
    </div>
  );

  return (
    <div className="p-1 bg-gray-100 w-[230px] rounded-lg shadow">
      <div className="flex justify-between items-center mb-1">
        <h1 className="font-semibold text-xl my-3">Activity</h1>
        <h3 className="font-lg text-md underline text-blue-600 cursor-pointer">View All</h3>
      </div>
      <ActivityCard
        imgSrc="./ana1.jpg"
        name="John Doe"
        role="[Python Developer]"
        description="Interview with Stella"
        time="15 mins ago"
      />
      <ActivityCard
        imgSrc="./ana2.jpg"
        name="John Doe"
        role="[Python Developer]"
        description="Interview with Stella"
        time="15 mins ago"
      />
      <ActivityCard
        imgSrc="./ana3.jpg"
        name="John Doe"
        role="[Python Developer]"
        description="Interview with Stella"
        time="15 mins ago"
      />
    </div>
  );
}

export default ActivityCardRight;
