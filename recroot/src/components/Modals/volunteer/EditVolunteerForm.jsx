import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateVolunteerAsync } from "../../../features/volunteers/volunteersSlice";
import { GrUpdate } from "react-icons/gr";

function EditVolunteerForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(openModal.data);
  const handleUpdateVolunteer = () => {
    // dispatch(
    //   updateVolunteerAsync({ id: editForm._id, updatedVolunteer: editForm })
    // );
    setOpenModal({ ...openModal, data: editForm, formType: "VolunteerDetail" });
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
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.contact || ""}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                contact: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
          />
          <select
            onChange={(e) =>
              setEditForm({
                ...editForm,
                isAvailable: e.target.value,
              })
            }
            value={editForm.isAvailable}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
          <input
            onChange={(e) =>
              setEditForm({ ...editForm, skills: e.target.value })
            }
            value={editForm.skills}
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.attendance || ""}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                attendance: Number(e.target.value),
              })
            }
            className="w-40 px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.marks || ""}
            onChange={(e) =>
              setEditForm({
                ...editForm,
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
        <span>Update</span>
        <GrUpdate className="h-6 w-6" />
      </div>
    </div>
  );
}

export default EditVolunteerForm;
