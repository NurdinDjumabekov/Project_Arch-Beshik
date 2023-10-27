// import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../../Menu/NavMenu/NavMenu";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default Layout;