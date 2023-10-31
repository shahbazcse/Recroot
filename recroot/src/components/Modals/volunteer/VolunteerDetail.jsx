import React from "react";
import { useDispatch } from "react-redux";
import { deleteVolunteerAsync } from "../../../features/volunteers/volunteersSlice";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function VolunteerDetail({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const { _id, name, contact, isAvailable, skills, interests, events } =
    openModal.data;

  const handleDeleteVolunteer = () => {
    // dispatch(deleteVolunteerAsync(_id));
    setOpenModal({ ...openModal, showModal: false });
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 text-xl">
        <div className="flex gap-16">
          <p>Name:</p>
          <p>{name}</p>
        </div>
        <div className="flex gap-11">
          <p>Contact:</p>
          <p>{contact}</p>
        </div>
        <div className="flex gap-4">
          <p>Availability:</p>
          <p>
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
        </div>
        <p>Skills:</p>
        <p className="border p-1 w-[30vh] rounded-lg text-sm overflow-auto flex flex-wrap">
          {skills.map((s) => (
            <span className="border rounded-full p-1 bg-slate-200 m-1">
              {s}
            </span>
          ))}
        </p>
        <p>Interests:</p>
        <p className="border p-1 w-[30vh] rounded-lg text-sm overflow-auto flex flex-wrap">
          {interests.map((i) => (
            <span className="border rounded-full p-1 bg-slate-200 m-1">
              {i}
            </span>
          ))}
        </p>
        <p>Events:</p>
        <p className="border p-1 w-[30vh] rounded-lg text-sm overflow-auto flex flex-wrap">
          {events.length ? (
            events.map((e) => (
              <span className="border rounded-full p-1 bg-slate-200 m-1">
                {e.name}
              </span>
            ))
          ) : (
            <span className="mx-auto text-center text-slate-500">
              No Events Registered
            </span>
          )}
        </p>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={() =>
            setOpenModal({
              ...openModal,
              formType: "EditVolunteer",
            })
          }
          className="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <AiOutlineEdit className="h-5 w-5" />
          <span>Edit</span>
        </div>
        <div
          onClick={handleDeleteVolunteer}
          className="flex items-center justify-center gap-2 bg-red-300 hover:bg-red-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <RiDeleteBin6Line />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDetail;
