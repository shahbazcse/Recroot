import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEventAsync } from "../../../features/events/eventsSlice";
import { BiCheck } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";

function AddEventForm({ openModal, setOpenModal }) {
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState({
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
    roles: [],
  });
  const [addRole, setAddRole] = useState({
    role: "",
    requiredVolunteers: 1,
  });

  const handleAddRole = () => {
    setEditForm({
      ...editForm,
      roles: [...editForm.roles, addRole],
    });
    setAddRole({
      role: "",
      requiredVolunteers: 1,
    });
  };

  const handleRemoveRole = (role) => {
    setEditForm({
      ...editForm,
      roles: editForm.roles.filter((r) => r.role !== role),
    });
  };

  const handleUpdateEvent = () => {
    console.log(editForm);
    dispatch(addEventAsync(editForm));
    setOpenModal({ ...openModal, data: editForm, formType: "EventDetail" });
  };
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        <input
          placeholder="Event Name"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          className="px-2 w-full py-1 border-slate-600 border rounded-md"
          type="text"
        />
        <textarea
          placeholder="Event Description"
          value={editForm.description}
          onChange={(e) =>
            setEditForm({ ...editForm, description: e.target.value })
          }
          className="text-sm w-full h-20 px-2 py-1 border-slate-600 border rounded-md"
        />
        <div className="flex flex-col gap-2 border p-2 rounded-lg">
          <input
            value={editForm.location.venue}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                location: { ...editForm.location, venue: e.target.value },
              })
            }
            placeholder="Event Venue"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.location.address.street}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                location: {
                  ...editForm.location,
                  address: {
                    ...editForm.location.address,
                    street: e.target.value,
                  },
                },
              })
            }
            placeholder="Street"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.location.address.city}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                location: {
                  ...editForm.location,
                  address: {
                    ...editForm.location.address,
                    city: e.target.value,
                  },
                },
              })
            }
            placeholder="City"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.location.address.state}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                location: {
                  ...editForm.location,
                  address: {
                    ...editForm.location.address,
                    state: e.target.value,
                  },
                },
              })
            }
            placeholder="State"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
          <input
            value={editForm.location.address.country}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                location: {
                  ...editForm.location,
                  address: {
                    ...editForm.location.address,
                    country: e.target.value,
                  },
                },
              })
            }
            placeholder="Country"
            className="px-2 py-1 border-slate-600 border rounded-md"
            type="text"
          />
        </div>
        <div className="flex gap-4">
          <input
            value={editForm.date.day}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                date: { ...editForm.date, day: Number(e.target.value) },
              })
            }
            className="w-20 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
            placeholder="Day"
            min={1}
            max={31}
          />
          <select
            value={editForm.date.month}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                date: { ...editForm.date, month: e.target.value },
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
            value={editForm.date.year}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                date: { ...editForm.date, year: Number(e.target.value) },
              })
            }
            className="w-24 px-2 py-1 border-slate-600 border rounded-md"
            type="number"
            placeholder="Year"
            min={2000}
            max={2050}
          />
        </div>
        <div className="flex gap-2">
          <input
            value={addRole.role}
            onChange={(e) => setAddRole({ ...addRole, role: e.target.value })}
            className="w-40 ml-1 px-2 py-1 rounded-lg border border-black"
            placeholder="Role Name"
            type="text"
          />
          <input
            value={addRole.requiredVolunteers}
            onChange={(e) =>
              setAddRole({
                ...addRole,
                requiredVolunteers: Number(e.target.value),
              })
            }
            className="w-40 ml-1 px-2 py-1 rounded-lg border border-black"
            type="number"
          />
          <button
            onClick={handleAddRole}
            className="bg-gray-200 hover:bg-gray-300 px-2 drop-shadow-sm cursor-pointer rounded-md"
          >
            Add
          </button>
        </div>
        <div className="flex flex-col gap-2 border p-2 rounded-lg w-[36vh] text-sm max-h-[16vh] overflow-auto">
          {!editForm.roles.length && (
            <p className="text-slate-500 mx-auto">No Roles Added</p>
          )}
          {editForm.roles.map((r) => {
            return (
              <div className="flex items-center justify-center gap-1">
                <div className="p-2 border bg-slate-100 rounded-lg">
                  <p>Role: {r.role}</p>
                  <p>Required Volunteers: {r.requiredVolunteers}</p>
                </div>
                <span onClick={() => handleRemoveRole(r.role)}>
                  <TiDeleteOutline className="h-6 w-6 hover:text-red-600 cursor-pointer" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-8 mb-4">
        <div
          onClick={handleUpdateEvent}
          className="flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 w-32 py-4 font-bold text-lg drop-shadow-md cursor-pointer rounded-md"
        >
          <BiCheck />
          <span>Add</span>
        </div>
      </div>
    </div>
  );
}

export default AddEventForm;
