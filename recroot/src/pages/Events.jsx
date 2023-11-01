import React from "react";
import EventList from "../components/ListTable/EventList";

function Events({ setOpenModal }) {
  return (
    <div className="mt-4 ml-8">
      <EventList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Events;
