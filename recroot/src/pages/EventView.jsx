import React from "react";
import EventSummary from "../components/ListTable/EventSummary";
import { useSelector } from "react-redux";

function EventView() {
  const { events } = useSelector((state) => state.events);
  const { volunteers } = useSelector((state) => state.volunteers);
  return (
    <div className="flex flex-col gap-8 mr-[24vh] my-4 pb-8">
      {events.map((event) => {
        const allVolunteers = volunteers.filter((v) =>
          v.events.includes(event._id)
        );
        return <EventSummary event={event} allVolunteers={allVolunteers} />;
      })}
    </div>
  );
}

export default EventView;
