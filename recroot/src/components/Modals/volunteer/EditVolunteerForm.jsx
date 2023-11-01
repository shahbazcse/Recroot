import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateVolunteerAsync } from "../../../features/volunteers/volunteersSlice";
import { GrUpdate } from "react-icons/gr";
import { TiDeleteOutline } from "react-icons/ti";

function EditVolunteerForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();

  const { events } = useSelector((state) => state.events);

  const [editForm, setEditForm] = useState(openModal.data);
  const [addSkill, setAddSkill] = useState("");
  const [addInterest, setAddInterest] = useState("");

  // Add Skills

  const handleAddSkill = () => {
    setEditForm({ ...editForm, skills: [...editForm.skills, addSkill] });
    setAddSkill("");
  };

  const handleRemoveSkill = (skill) => {
    setEditForm({
      ...editForm,
      skills: editForm.skills.filter((s) => s !== skill),
    });
  };

  // Add Interests

  const handleAddInterest = () => {
    setEditForm({
      ...editForm,
      interests: [...editForm.interests, addInterest],
    });
    setAddInterest("");
  };

  const handleRemoveInterest = (interest) => {
    setEditForm({
      ...editForm,
      interests: editForm.interests.filter((i) => i !== interest),
    });
  };

  // Add Events

  const handleAddEvent = (newEvent) => {
    const foundEvent = editForm.events.find((e) => e === newEvent);
    if (!foundEvent) {
      setEditForm({
        ...editForm,
        events: [...editForm.events, newEvent],
      });
    }
  };

  const getEventName = (id) => {
    return events.find(({ _id }) => _id === id).name;
  };

  const handleRemoveEvent = (event) => {
    setEditForm({
      ...editForm,
      events: editForm.events.filter((_id) => _id !== event),
    });
  };

  const handleUpdateVolunteer = () => {
    dispatch(
      updateVolunteerAsync({ id: editForm._id, updatedVolunteer: editForm })
    );
    setOpenModal({ ...openModal, data: editForm, formType: "VolunteerDetail" });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-3 text-md">
        <div className="flex gap-16">
          <p>Name:</p>
          <input
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-40 px-2 py-1 rounded-lg border border-black"
            type="text"
          />
        </div>
        <div className="flex gap-11">
          <p>Contact:</p>
          <input
            value={editForm.contact}
            onChange={(e) =>
              setEditForm({ ...editForm, contact: Number(e.target.value) })
            }
            className="w-40 ml-1 px-2 py-1 rounded-lg border border-black"
            type="number"
          />
        </div>
        <div className="flex gap-4">
          <p>Availability:</p>
          <select
            value={editForm.isAvailable}
            onChange={(e) =>
              setEditForm({ ...editForm, isAvailable: e.target.value })
            }
            className="w-40 ml-2 px-2 py-1 rounded-lg border border-black"
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
        </div>
        <p>Skills:</p>
        <div className="flex gap-2">
          <input
            value={addSkill}
            onChange={(e) => setAddSkill(e.target.value)}
            className="w-40 ml-1 px-2 py-1 rounded-lg border border-black"
          />
          <button
            onClick={handleAddSkill}
            className="bg-gray-200 hover:bg-gray-300 px-2 drop-shadow-sm cursor-pointer rounded-md"
          >
            Add
          </button>
        </div>
        <div className="border p-1 w-[30vh] rounded-lg text-sm max-h-[10vh] overflow-auto flex flex-wrap">
          {editForm.skills.length === 0 && (
            <span className="mx-auto text-slate-500">No Skills Added</span>
          )}
          {editForm.skills.map((s) => {
            return (
              <div className="flex items-center justify-center gap-1 border rounded-full p-1 bg-slate-200 m-1">
                <span>{s}</span>
                <span onClick={() => handleRemoveSkill(s)}>
                  <TiDeleteOutline className="h-6 w-6 hover:text-red-600 cursor-pointer" />
                </span>
              </div>
            );
          })}
        </div>
        <p>Interests:</p>
        <div className="flex gap-2">
          <input
            value={addInterest}
            onChange={(e) => setAddInterest(e.target.value)}
            className="w-40 ml-1 px-2 py-1 rounded-lg border border-black"
          />
          <button
            onClick={handleAddInterest}
            className="bg-gray-200 hover:bg-gray-300 px-2 drop-shadow-sm cursor-pointer rounded-md"
          >
            Add
          </button>
        </div>
        <div className="border p-1 w-[30vh] rounded-lg text-sm max-h-[10vh] overflow-auto flex flex-wrap">
          {editForm.interests.length === 0 && (
            <span className="mx-auto text-slate-500">No Interests Added</span>
          )}
          {editForm.interests.map((i) => {
            return (
              <div className="flex items-center justify-center gap-1 border rounded-full p-1 bg-slate-200 m-1">
                <span>{i}</span>
                <span onClick={() => handleRemoveInterest(i)}>
                  <TiDeleteOutline className="h-6 w-6 hover:text-red-600 cursor-pointer" />
                </span>
              </div>
            );
          })}
        </div>
        <p>Events:</p>
        <div className="border p-1 w-[30vh] rounded-lg text-sm max-h-[10vh] overflow-auto flex flex-wrap">
          {editForm.events.length ? (
            editForm.events.map((e) => (
              <div className="flex items-center justify-center gap-1 border rounded-full p-1 bg-slate-200 m-1">
                <span>{getEventName(e)}</span>
                <span onClick={() => handleRemoveEvent(e)}>
                  <TiDeleteOutline className="h-6 w-6 hover:text-red-600 cursor-pointer" />
                </span>
              </div>
            ))
          ) : (
            <div className="mx-auto text-center text-slate-500">
              <p>No Events Registered</p>
              <p>Add Upcoming Event</p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center mt-4">
          <p>Add Events:</p>
          <select
            onChange={(e) => {
              e.target.value !== "" && handleAddEvent(e.target.value);
            }}
            className="w-40 ml-2 px-2 py-1 rounded-lg border border-black"
          >
            <option value="">Select Event</option>
            {events.map(({ _id, name }) => (
              <option
                className={`${
                  editForm.events.find((e) => e === _id) && "text-slate-200"
                }`}
                value={_id}
              >
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div
        onClick={handleUpdateVolunteer}
        className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-36 py-4 mb-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
      >
        <span>Update</span>
        <GrUpdate className="h-6 w-6" />
      </div>
    </div>
  );
}

export default EditVolunteerForm;
