import React from "react";

function HiringCandidatesRight() {
  const HiredCard = ({ imgSrc, name, position }) => (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-1 mb-1">
      <img
        src={imgSrc}
        className="w-[55px] h-[55px] rounded-full mr-4"
        alt={name}
      />
      <div className="flex-grow flex flex-col">
        <div className="font-semibold text-md">{name}</div>
        <div className="text-gray-700 text-sm">{position}</div>
        <div className="text-gray-600 text-xs my-1">Hired by: Stella</div>
        <button className="border-blue-500 border bg-white text-blue-500 font-medium p-1 rounded text-xs mt-1">
          Details
        </button>
      </div>
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
    <div className="p-1 bg-gray-100 w-[230px] rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h1 className="font-semibold text-xl ">Hiring Candidates</h1>
        <h3 className="font-lg text-md whitespace-nowrap underline ml-1 text-blue-600 cursor-pointer">
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
