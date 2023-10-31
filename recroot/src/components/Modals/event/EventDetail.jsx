import React from "react";
import { useDispatch } from "react-redux";
import { deleteEventAsync } from "../../../features/events/eventsSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function EventDetail({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { _id, name, description, location, date, roles } = openModal.data;

  const handleDeleteEvent = () => {
    // dispatch(deleteEventAsync(_id));
    setOpenModal({ ...openModal, showModal: false });
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-center">{name}</p>
        <p className="p-2 border rounded-lg">{description}</p>
        <p>
          Location: {location.venue}, {location.address.street},{" "}
          {location.venue}, {location.address.city}, {location.venue},{" "}
          {location.address.country}
        </p>
        <p>
          Date: {date.month} {date.day}, {date.year}
        </p>
        <div className="flex flex-col gap-2 border p-2 rounded-lg text-sm">
          {roles.map((r) => {
            return (
              <div className="p-2 border bg-slate-100 rounded-lg">
                <p>Role: {r.role}</p>
                <p>Required Volunteers: {r.requiredVolunteers}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={() =>
            setOpenModal({
              ...openModal,
              formType: "EditEvent",
            })
          }
          className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <AiOutlineEdit className="h-5 w-5" />
          <span>Edit</span>
        </div>
        <div
          onClick={handleDeleteEvent}
          className="flex items-center justify-center gap-2 bg-red-300 hover:bg-red-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
