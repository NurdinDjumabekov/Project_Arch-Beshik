import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "../../NavMenu/NavMenu";

const Layout = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  return (
    <>
      <NavMenu />
      {stateBtnNav ? "" : <Outlet />}
    </>
  );
};

export default Layout;
