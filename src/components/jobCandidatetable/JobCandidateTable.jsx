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
    <table className="min-w-full ml-[15px] leading-normal">
      <thead>
        <tr className="border-b-2 py-4 border-gray-600">
          <th>Job ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>1st Level</th>
          <th>2nd Level</th>
          <th>3rd Level</th>
          <th>4th Level</th>
          <th>Total Marks</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate, index) => (
          <tr
            key={index}
            className="text-center border-b-2 py-[8px] border-gray-300" 
          >
            <td>{candidate.id}</td>
            <td>{candidate.name}</td>
            <td>{candidate.position}</td>
            {candidate.levels.map((level, idx) => (
              <td key={idx}>
                {level === "X" ? (
                  <MdCancel className="text-red-500" />
                ) : (
                  level
                )}
              </td>
            ))}
            <td>{candidate.total}</td>
            <td>
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
            <td>
              <button className="p-2">
                <IoEyeOutline size={24} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default JobCandidateTable;
