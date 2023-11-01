import React from "react";
import { ImManWoman } from "react-icons/im";
import { BiParty } from "react-icons/bi";

function OptionsModal({ openModal, setOpenModal }) {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mb-4">
      <div
        onClick={() =>
          setOpenModal({
            ...openModal,
            formType: "AddVolunteer",
          })
        }
        className="flex items-center justify-center gap-3 bg-blue-200 hover:bg-blue-300 w-52 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <ImManWoman className="h-10 w-10" />
        <span>Add Volunteer</span>
      </div>
      <div
        onClick={() =>
          setOpenModal({
            ...openModal,
            formType: "AddEvent",
          })
        }
        className="flex items-center justify-center gap-3 bg-green-300 hover:bg-green-400 w-52 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <BiParty className="h-10 w-10" />
        <span>Add Event</span>
      </div>
    </div>
  );
}

export default OptionsModal;
