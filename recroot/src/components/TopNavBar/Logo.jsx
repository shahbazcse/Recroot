import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

function Logo() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className="cursor-pointer bg-slate-200 border rounded-full">
      <img src={logo} alt="logo" className="h-16 w-16 p-2" />
    </div>
  );
}

export default Logo;
