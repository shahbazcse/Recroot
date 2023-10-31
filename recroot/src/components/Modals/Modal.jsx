import React from "react";

import VolunteerDetail from "./volunteer/VolunteerDetail";
import EditVolunteerForm from "./volunteer/EditVolunteerForm";
import AddVolunteerForm from "./volunteer/AddVolunteerForm";

import EventDetail from "./event/EventDetail";
import EditEventForm from "./event/EditEventForm";
import AddEventForm from "./event/AddEventForm";

import OptionsModal from "./OptionsModal";

function Modal({ openModal, setOpenModal }) {
  return (
    <div
      id="blur-area"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center"
    >
      <div className="bg-white rounded-lg mx-[6vh] w-[42vh] lg:mx-[36vh] font-[poppins]">
        <div className="flex justify-end items-center sticky top-0 z-10 drop-shadow-md opacity-[0.85] bg-white border-b border-gray-100 text-white text-right px-4 py-2 rounded-t-lg">
          <div className="text-black mx-auto text-xl font-bold">
            {openModal.formType === "VolunteerDetail" && "Volunteer Detail"}
            {openModal.formType === "EditVolunteer" && "Edit Volunteer"}
            {openModal.formType === "AddVolunteer" && "Add Volunteer"}

            {openModal.formType === "EventDetail" && "Event Detail"}
            {openModal.formType === "EditEvent" && "Edit Event"}
            {openModal.formType === "AddEvent" && "Add Event"}
          </div>
          <div
            onClick={() =>
              setOpenModal({
                ...openModal,
                showModal: false,
              })
            }
            className="border-2 p-1 border-gray-300 rounded-full hover:bg-gray-400 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col mx-8 mt-8 mb-4 gap-8">
          {/* Volunteer */}
          {openModal.formType === "VolunteerDetail" && (
            <VolunteerDetail
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
          {openModal.formType === "EditVolunteer" && (
            <EditVolunteerForm
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}

          {/* Event */}
          {openModal.formType === "EventDetail" && (
            <EventDetail openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {openModal.formType === "EditEvent" && (
            <EditEventForm openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {/* Add Options */}
          {openModal.formType === "OptionsModal" && (
            <OptionsModal openModal={openModal} setOpenModal={setOpenModal} />
          )}
          {openModal.formType === "AddVolunteer" && (
            <AddVolunteerForm
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          )}
          {openModal.formType === "AddEvent" && (
            <AddEventForm openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
