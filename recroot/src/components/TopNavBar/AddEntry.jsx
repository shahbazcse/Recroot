import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddEntry({ setOpenModal }) {
  return (
    <div
      onClick={() =>
        setOpenModal({
          showModal: true,
          formType: "OptionsModal",
        })
      }
      className="flex items-center justify-center gap-1 bg-[#fd7790] hover:bg-[#f8516f] px-7 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
    >
      <span>Add Entry</span>
      <AiOutlinePlus className="h-5 w-5" />
    </div>
  );
}

export default AddEntry;
