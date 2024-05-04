import React from "react";
import { MdCancel } from "react-icons/md"; 
import { IoEyeOutline } from "react-icons/io5"; 

const candidates = [
  {
    id: "#001",
    name: "John Doe",
    position: "Designer",
    levels: [6, 7, 3, "..."],
    total: "...",
    status: "Active",
  },
  {
    id: "#002",
    name: "John Smith",
    position: "Angular Developer",
    levels: [6, 5, 5, 8],
    total: "24/40",
    status: "Hired",
  },
  {
    id: "#003",
    name: "Johnson Smith",
    position: "Python Developer",
    levels: [6, 7, 3, "..."],
    total: "...",
    status: "Active",
  },
  {
    id: "#004",
    name: "Stella",
    position: "Android Developer",
    levels: [6, 2, "X", "X"],
    total: "8/40",
    status: "Reject",
  },
  {
    id: "#005",
    name: "Randy",
    position: "iOS Developer",
    levels: [6, 7, 3, "..."],
    total: "...",
    status: "Active",
  },
  {
    id: "#006",
    name: "John Doe",
    position: "Junior Designer",
    levels: [6, 7, 3, "..."],
    total: "...",
    status: "Active",
  },
];

function JobCandidateTable() {
  return (
    <table className="min-w-full ml-2 leading-normal">
      <thead>
      <tr className="border-b-2 py-3 border-gray-600">
          <th className="w-1/12 px-1 text-xs">Job ID</th> {/* Adjust width and padding here */}
          <th className="w-1/12 px-1 text-xs">Name</th>
          <th className="w-1/12 px-1 mx-2 text-xs">Position</th>
          <th className="w-1/12 px-1 text-xs">1st Level</th>
          <th className="w-1/12 px-1 text-xs">2nd Level</th>
          <th className="w-1/12 px-1 text-xs">3rd Level</th>
          <th className="w-1/12 px-1 text-xs">4th Level</th>
          <th className="w-1/12 px-1 text-xs">Total Marks</th>
          <th className="w-1/12 px-1 text-xs">Status</th>
          <th className="w-1/12 px-1 text-xs">Actions</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr
            key={index}
            className="text-center  mx-5 border-b-2 py-[8px] border-gray-300" 
          >
            <td  className="font-[1.2px] tracking-tighter text-[13.5px]">{candidate.id}</td>
            <td className="font-[1.2px] tracking-tighter text-[13.5px]">{candidate.name}</td>
            <td className="font-[1.2px] tracking-tighter text-[13.5px]">{candidate.position}</td>
            {candidate.levels.map((level, idx) => (
              <td className="font-[1.2px] text-[13.5px]" key={idx}>
                {level === "X" ? (
                  <MdCancel className="text-red-500 ml-10" />
                ) : (
                  level
                )}
              </td>
            ))}
            <td className="font-[1.2px] text-[13.5px]">{candidate.total}</td>
            <td className="font-[1.2px] text-[13.5px]">
              <span
                className={`label ${
                  candidate.status === "Reject"
                    ? "text-red-600 bg-red-200"
                    : candidate.status === "Hired"
                    ? "text-green-600 bg-green-200"
                    : "text-yellow-600 bg-yellow-200"
                }`}
              >
                {candidate.status}
              </span>
            </td>
            <td className="font-[1.2px] text-[13.5px]">
              <button className="p-3">
                <IoEyeOutline size={21} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobCandidateTable;
