import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";
import { ImManWoman } from "react-icons/im";
import { BiParty } from "react-icons/bi";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

function LeftNavBar() {
  const navigate = useNavigate();

  const isActive = (path) => {
    return window.location.pathname === path
      ? "bg-[#f8516f]"
      : "bg-[#f8aab8] hover:bg-[#fd7790]";
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-between py-8 bg-slate-100 mx-24 my-4 h-[70vh] rounded-3xl drop-shadow-md font-bold text-lg">
      <div className="flex items-center justify-center gap-3 text-2xl px-8 py-2 rounded-full bg-slate-200">
        <div className="bg-slate-300 border rounded-full">
          <img src={logo} alt="logo" className="h-14 w-14 p-2" />
        </div>
        <span>Recroot</span>
      </div>
      <div className="flex flex-col gap-6 mb-20">
        <div
          onClick={() => navigate("/volunteers")}
          className={`${isActive(
            "/volunteers"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[27vh] py-4 rounded-xl cursor-pointer`}
        >
          <ImManWoman className="h-7 w-7" />
          <span>Volunteers</span>
        </div>
        <div
          onClick={() => navigate("/events")}
          className={`${isActive(
            "/events"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[27vh] py-4 rounded-xl cursor-pointer`}
        >
          <BiParty className="h-7 w-7" />
          <span>Events</span>
        </div>
        <div
          onClick={() => navigate("/volunteers-summary")}
          className={`${isActive(
            "/volunteers-summary"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[27vh] py-4 rounded-xl cursor-pointer`}
        >
          <SiGoogleclassroom className="h-7 w-7" />
          <span>Volunteers Summary</span>
        </div>
        <div
          onClick={() => navigate("/events-summary")}
          className={`${isActive(
            "/events-summary"
          )} flex items-center gap-3 pl-6 drop-shadow-sm text-center w-[27vh] py-4 rounded-xl cursor-pointer`}
        >
          <MdOutlineAnalytics className="h-7 w-7" />
          <span>Events Summary</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12 px-7">
        <a
          href="https://github.com/shahbazcse/Recroot"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-7 w-7 cursor-pointer text-[#fd7790] hover:text-black" />
        </a>
        <a
          href="https://twitter.com/shahbaz_cse"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter className="h-7 w-7 cursor-pointer text-[#fd7790] hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/shahbazcse/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-7 w-7 cursor-pointer text-[#fd7790] hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
}

export default LeftNavBar;
