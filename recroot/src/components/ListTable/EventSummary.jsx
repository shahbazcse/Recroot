import React from "react";
import { useSelector } from "react-redux";

function EventSummary({ setOpenModal }) {
  const { students } = useSelector((state) => state.volunteers);

  return (
    <div className="h-[72vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-blue-300">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Name</th>
            <th className="px-4 py-2 border-r border-b">Grade</th>
            <th className="px-4 py-2 border-r border-b">Gender</th>
            <th className="px-4 py-2 border-r border-b">Age</th>
            <th className="px-4 py-2 border-r border-b">Attendance</th>
            <th className="px-4 py-2 border-b">Marks</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {[].map((student, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() =>
                    setOpenModal({
                      showModal: true,
                      data: student,
                      formType: "StudentDetail",
                    })
                  }
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {student.name}
                </span>
              </td>
              <td className="px-4 py-2 border-r border-b">{student.grade}</td>
              <td className="px-4 py-2 border-r border-b">{student.gender}</td>
              <td className="px-4 py-2 border-r border-b">{student.age}</td>
              <td className="px-4 py-2 border-r border-b">{student.attendance}%</td>
              <td className="px-4 py-2 border-b">{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventSummary;
