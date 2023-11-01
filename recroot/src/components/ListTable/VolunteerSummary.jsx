import React from "react";
import { useSelector } from "react-redux";

function VolunteerSummary({ volunteer }) {
  const { events: allEvents } = useSelector((state) => state.events);
  const { name, contact, isAvailable, events } = volunteer;

  const getEventDetails = (eId) => {
    return allEvents.find(({ _id }) => _id === eId);
  };

  return (
    <div className="bg-slate-200 flex flex-col gap-3 border px-12 py-8 rounded-lg">
      <p className="font-bold text-3xl">{name}</p>
      <p>
        <span className="font-bold">Contact:</span> {contact}
      </p>
      <p>
        <span className="mr-2 font-bold">Availability:</span>
        {isAvailable ? (
          <span className="bg-green-300 font-bold px-2 py-1 rounded-lg">
            Available
          </span>
        ) : (
          <span className="bg-red-300 font-bold px-2 py-1 rounded-lg">
            Not Available
          </span>
        )}
      </p>
      <p className="font-bold">Events:</p>
      <div className="flex flex-col gap-2 border border-slate-300 p-2 w-[28vh] rounded-lg text-sm">
        {events.map((eId) => {
          const event = getEventDetails(eId);
          return (
            <div className="p-2 border bg-slate-100 rounded-lg">
              <p><span className="font-bold mr-1">Event:</span> {event.name}</p>
              <p>
                <span className="font-bold mr-1">Date:</span> {event.date.month} {event.date.day}, {event.date.year}
              </p>
              <p>
                <span className="font-bold mr-1">Location:</span> {event.location.venue}, {event.location.address.city},{" "}
                {event.location.address.country}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VolunteerSummary;
