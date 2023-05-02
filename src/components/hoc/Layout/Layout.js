import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "../../NavMenu/NavMenu";
import Footer from "../../../components/Footer/Footer";

const Layout = () => {
  const { stateBtnNav } = useSelector((state) => state.infoWorkSlice);
  return (
    <>
      <NavMenu />
      {stateBtnNav ? "" : <Outlet />}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
