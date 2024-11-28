import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/mobileview/Nav";


export const UsermobileLayout = () => {
  return (
    <>
      <Outlet />
      <Nav />
    </>
  );
};
