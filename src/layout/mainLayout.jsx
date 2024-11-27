import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  );
}

export default MainLayout;
