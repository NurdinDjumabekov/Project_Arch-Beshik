import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "../../NavMenu/NavMenu";

const Layout = () => {
  const { btnNavMiniDisplay } = useSelector((state) => state.mainPageSlice);
  return (
    <>
      <NavMenu />
      {btnNavMiniDisplay ? "" : <Outlet />}
    </>
  );
};

export default Layout;
