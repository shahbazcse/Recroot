import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacherAsync } from "../../../features/events/eventsSlice";
import { BiCheck } from "react-icons/bi";

function AddEventForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [teacherForm, setTeacherForm] = useState({
    name: "",
    description: "",
    location: {
      venue: "",
      address: {
        street: "",
        city: "",
        state: "",
        country: "",
      },
    },
    date: {
      day: 1,
      month: "January",
      year: 2000,
    },
    roles: [
      {
        role: "",
        requiredVolunteers: 0,
      },
    ],
  });
  const handleAddTeacher = () => {
    // dispatch(addTeacherAsync(teacherForm));
    setOpenModal({ ...openModal, showModal: false });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-6 text-lg items-center justify-center">
        <input
          placeholder="Event Name"
          value={teacherForm.name}
          onChange={(e) =>
            setTeacherForm({ ...teacherForm, name: e.target.value })
          }
          className="px-2 w-full py-1 border-slate-600 border rounded-md"
          type="text"
        />
        <textarea
          placeholder="Event Description"
          value={teacherForm.name}
          onChange={(e) =>
            setTeacherForm({ ...teacherForm, name: e.target.value })
          }
          className="text-sm w-full h-20 px-2 py-1 border-slate-600 border rounded-md"
        />
        <div className="flex flex-col gap-2 border p-2 rounded-lg">
          <input
            placeholder="Event Venue"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            placeholder="Street"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            placeholder="City"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            placeholder="State"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            placeholder="Country"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <input
            value={teacherForm.contact}
            onChange={(e) =>
              setTeacherForm({
                ...teacherForm,
                contact: Number(e.target.value),
              })
            }
            className="w-20 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
            placeholder="Day"
            min={1}
            max={31}
          />
          <select
            value={teacherForm.contact}
            onChange={(e) =>
              setTeacherForm({
                ...teacherForm,
                contact: Number(e.target.value),
              })
            }
            className="w-23 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          >
            <option value="">Year</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <input
            value={teacherForm.contact}
            onChange={(e) =>
              setTeacherForm({
                ...teacherForm,
                contact: Number(e.target.value),
              })
            }
            className="w-24 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
            placeholder="Year"
            min={2000}
            max={2050}
          />
        </div>
      </div>
      <div
        onClick={handleAddTeacher}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Add</span>
        <BiCheck className="h-6 w-6" />
      </div>
    </div>
  );
}

export default AddEventForm;
