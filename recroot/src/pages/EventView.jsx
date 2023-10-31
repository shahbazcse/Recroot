import React from "react";
import EventSummary from "../components/ListTable/EventSummary"

function Class({ setOpenModal }) {
  return (
    <div className="flex flex-col gap-6 mt-4 ml-8">
      <EventSummary setOpenModal={setOpenModal} />
    </div>
  );
}

export default Class;
