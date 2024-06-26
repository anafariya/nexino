import React from "react";

function HiringCandidatesRight() {
  const HiredCard = ({ imgSrc, name, position }) => (
    <div className="flex items-center bg-gray-200 mb-10">
      <img
        src={imgSrc}
        className="w-[55px] h-[55px] rounded-full mr-4 object-cover"
        alt={name}
      />
      <div className="flex-grow bg-gray-100 flex flex-col">
        <div className="text-[11.7px] font-semibold tracking-tight">{name}</div>
        <div className="text-gray-700 text-[11.2px] tracking-tighter font-normal mt-2">{position}</div>
        <div className="text-gray-600 text-[10.5px] font-normal whitespace-nowrap my-1">Hired by: Stella</div>
       
      </div>
      <button className="border-blue-500 border w-[50px] bg-white text-blue-500 font-medium p-1 rounded text-xs mt-1">
          Details
        </button>
    </div>
  );

  const people = [
    {
      imgSrc: "./ana1.jpg",
      name: "Alice Johnson",
      position: "Web Developer",
    },
    {
      imgSrc: "./ana2.jpg",
      name: "Bob Smith",
      position: "UI/UX Designer",
    },
    {
      imgSrc: "./ana3.jpg",
      name: "Carol White",
      position: "Project Manager",
    },
    {
      imgSrc: "./ana1.jpg",
      name: "Dave Brown",
      position: "Data Scientist",
    },
    {
      imgSrc: "./ana2.jpg",
      name: "Eve Black",
      position: "Software Engineer",
    },
  ];

  return (
    <div className="p-1 w-[230px] bg-gray-100  ml-1">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-[17px] font-semibold whitespace-nowrap my-3 ">Hiring Candidates</h1>
        <h3 className="font-normal mr-3 text-md whitespace-nowrap underline text-blue-600 cursor-pointer">
          View All
        </h3>
      </div>
      {people.map((person, index) => (
        <HiredCard
          key={index}
          imgSrc={person.imgSrc}
          name={person.name}
          position={person.position}
        />
      ))}
    </div>
  );
}

export default HiringCandidatesRight;
