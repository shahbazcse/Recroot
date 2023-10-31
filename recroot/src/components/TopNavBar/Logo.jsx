import React from "react";
import { useNavigate } from "react-router-dom";
import { LiaSchoolSolid } from "react-icons/lia";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer">
      <LiaSchoolSolid className="h-16 w-16 rounded-full" />
    </div>
  );
}

export default Logo;
