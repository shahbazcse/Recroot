import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatedQuery } from "../../features/events/eventsSlice";

function SearchBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { filteredQuery } = useSelector((state) => state.events);

  return (
    <div className="flex items-center justify-center bg-slate-50 border-slate-200 border-2 drop-shadow-sm text-xl rounded-md">
      <AiOutlineSearch className="h-8 w-8 text-slate-400 m-2" />
      <input
        value={filteredQuery}
        onChange={(e) => {
          navigate("/events");
          dispatch(updatedQuery(e.target.value));
        }}
        className="p-2 outline-none border-l"
        placeholder="Search Events or City"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
