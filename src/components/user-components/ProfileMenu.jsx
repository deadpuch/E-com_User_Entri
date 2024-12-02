import { CircleUserRound } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ProfileMenu = () => {
  return (
    <div className="h-[80vh] w-[6rem] bg-black rounded-2xl flex justify-center py-10">
      <NavLink to="/">
        <div className="h-fit flex flex-col items-center">
          <CircleUserRound size={32} color="#ffffff" />
          <h1 className="text-white">Profile</h1>
        </div>
      </NavLink>
     
      <div></div>
      <div></div>
    </div>
  );
};
