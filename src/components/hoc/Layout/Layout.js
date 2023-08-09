import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../../NavMenu/NavMenu";

const Layout = () => {
  return (
    <>
      <NavMenu />
      {/* {btnNavMiniDisplay ? "" : <Outlet />} */}
      <Outlet />
    </>
  );
};

export default Layout;
