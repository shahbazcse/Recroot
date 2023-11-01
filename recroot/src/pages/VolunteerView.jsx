import React from "react";
import VolunteerSummary from "../components/ListTable/VolunteerSummary";
import { useSelector } from "react-redux";

function VolunteerView() {
  const { volunteers } = useSelector((state) => state.volunteers);
  return (
    <div className="flex flex-col gap-8 mr-[24vh] my-4 pb-8">
      {volunteers.map((volunteer) => {
        return <VolunteerSummary volunteer={volunteer} />;
      })}
    </div>
  );
}

export default VolunteerView;
