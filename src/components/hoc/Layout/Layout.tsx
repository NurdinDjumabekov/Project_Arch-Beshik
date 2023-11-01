import { Outlet } from "react-router-dom";
import NavMenu from "../../Menu/NavMenu/NavMenu";
import Footer from "../../Footer/Footer";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;