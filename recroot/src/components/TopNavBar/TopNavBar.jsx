import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AddEntry from "./AddEntry";

function TopNavBar({ setOpenModal }) {
  return (
    <div className="flex justify-between px-12 items-center h-[10%] w-full">
      <Logo />
      <SearchBar />
      <AddEntry setOpenModal={setOpenModal} />
    </div>
  );
}

export default TopNavBar;
