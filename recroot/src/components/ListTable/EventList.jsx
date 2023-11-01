import React from "react";
import { useSelector } from "react-redux";

function EventList({ setOpenModal }) {
  const { events, filterQuery } = useSelector((state) => state.events);

  const filteredEvents = events.filter(
    ({ name, location }) =>
      (filterQuery === "") |
      name.toUpperCase().includes(filterQuery.toUpperCase()) |
      location.address.city.toUpperCase().includes(filterQuery.toUpperCase())
  );

  return (
    <div className="h-[80vh] overflow-auto drop-shadow-md">
      <table className="w-[80%] text-left">
        <thead className="sticky top-0 bg-[#fd7790]">
          <tr>
            <th className="px-4 py-2 border-r border-b w-[8vh]">#</th>
            <th className="px-4 py-2 border-r border-b">Name</th>
            <th className="px-4 py-2 border-r border-b">Date</th>
            <th className="px-4 py-2 border-b">Location</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {filteredEvents.map((event, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-r border-b w-[8vh]">
                #{index + 1}
              </td>
              <td className="px-4 py-2 border-r border-b font-bold">
                <span
                  onClick={() =>
                    setOpenModal({
                      showModal: true,
                      data: event,
                      formType: "EventDetail",
                    })
                  }
                  className="underline hover:cursor-pointer hover:text-blue-600"
                >
                  {event.name}
                </span>
              </td>
              <td className="px-4 py-2 border-r border-b">
                {event.date.month} {event.date.day}, {event.date.year}
              </td>
              <td className="px-4 py-2 border-b">
                <span className="font-bold">{event.location.venue}</span>,{" "}
                {event.location.address.city}, {event.location.address.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList;
