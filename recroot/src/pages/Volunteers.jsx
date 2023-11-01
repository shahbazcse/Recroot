import React from "react";
import VolunteerList from "../components/ListTable/VolunteerList";

function Volunteers({ setOpenModal }) {
  return (
    <div className="mt-4 ml-8">
      <VolunteerList setOpenModal={setOpenModal} />
    </div>
  );
}

export default Volunteers;
