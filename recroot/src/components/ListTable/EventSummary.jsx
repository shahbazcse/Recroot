import React from "react";

function EventSummary({ allVolunteers, event }) {
  const { name, description, location, date, roles } = event;
  return (
    <div className="bg-slate-200 flex flex-col gap-3 border px-12 py-8 rounded-lg">
      <p className="font-bold text-3xl">{name}</p>
      <p>
        <span className="font-bold">Description:</span> {description}
      </p>
      <p>
        <span className="font-bold">Location:</span> {location.venue}
        {location.address.street},{location.address.city},{" "}
        {location.address.state}, {location.address.country}
      </p>
      <p>
        <span className="font-bold">Date:</span> {date.month} {date.day},{" "}
        {date.year}
      </p>
      <p className="font-bold">Roles:</p>
      <div className="flex flex-col gap-2 border border-slate-300 p-2 w-[28vh] rounded-lg text-sm">
        {roles.map((r) => {
          return (
            <div className="p-2 border bg-slate-100 rounded-lg">
              <p><span className="font-bold mr-1">Role:</span> {r.role}</p>
              <p><span className="font-bold mr-1">Required Volunteers:</span> {r.requiredVolunteers}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-bold">Registered Volunteers:</p>
        <div className="flex flex-col gap-2 border border-slate-300 p-2 w-[28vh] rounded-lg text-sm">
          {allVolunteers.map((v) => {
            return (
              <div className="p-2 border bg-slate-100 rounded-lg">
                <p><span className="font-bold mr-1">Name:</span> {v.name}</p>
                <p><span className="font-bold mr-1">Contact:</span> {v.contact}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventSummary;
