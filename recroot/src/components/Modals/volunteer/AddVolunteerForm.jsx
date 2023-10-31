import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVolunteerAsync } from "../../../features/volunteers/volunteersSlice";
import { BiCheck } from "react-icons/bi";

function AddVolunteerForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    contact: 0,
    isAvailable: "",
    skills: [],
    interests: [],
    events: [],
  });
  const handleUpdateVolunteer = () => {
    // dispatch(addVolunteerAsync(studentForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-6 text-lg items-center justify-center">
        <div className="flex flex-col gap-6">
          <p>Name:</p>
          <p>Contact:</p>
          <p>Availability:</p>
          <p>Skills:</p>
          <p>Interests:</p>
          <p>Events:</p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            value={volunteerForm.name}
            onChange={(e) =>
              setVolunteerForm({ ...volunteerForm, name: e.target.value })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={volunteerForm.contact || ""}
            onChange={(e) =>
              setVolunteerForm({
                ...volunteerForm,
                contact: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setVolunteerForm({
                ...volunteerForm,
                isAvailable: e.target.value,
              })
            }
            value={volunteerForm.isAvailable}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
          <input
            onChange={(e) =>
              setVolunteerForm({ ...volunteerForm, skills: e.target.value })
            }
            value={volunteerForm.skills}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={volunteerForm.attendance || ""}
            onChange={(e) =>
              setVolunteerForm({
                ...volunteerForm,
                attendance: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={volunteerForm.marks || ""}
            onChange={(e) =>
              setVolunteerForm({
                ...volunteerForm,
                marks: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
        </div>
      </div>
      <div
        onClick={handleUpdateVolunteer}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddVolunteerForm;
