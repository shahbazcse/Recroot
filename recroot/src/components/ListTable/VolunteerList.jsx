import React from "react";
import { useSelector } from "react-redux";

function VolunteerList({ setOpenModal }) {
  const { volunteers } = useSelector((state) => state.volunteers);

  return (
    <div className="h-[80vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-[#fd7790]">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Name</th>
            <th className="px-4 py-2 border-r border-b">Contact</th>
            <th className="px-4 py-2 border-b">Availability</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {volunteers.map((volunteer, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() =>
                    setOpenModal({
                      showModal: true,
                      data: volunteer,
                      formType: "VolunteerDetail",
                    })
                  }
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {volunteer.name}
                </span>
              </td>
              <td className="px-4 py-2 border-r border-b">
                {volunteer.contact}
              </td>
              <td className="px-4 py-2 border-b">
                {volunteer.isAvailable ? (
                  <span className="bg-green-300 font-bold px-2 py-1 rounded-lg">
                    Available
                  </span>
                ) : (
                  <span className="bg-red-300 font-bold px-2 py-1 rounded-lg">
                    Not Available
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerList;
