import React from "react";
import axios from "axios";
import styles from "./Logout.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Logout = ({ setStateToken }) => {
  const { baseNums } = useSelector((state) => state.infoWorkSlice);
  // const baseNums = "192.168.21.218";

  const navigate = useNavigate();
  const location = useLocation();
  const logoutFn = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: `http://baielbekenov.pythonanywhere.com/api/logout/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    setStateToken(false);
    window.localStorage.clear();
    navigate("/");
    // if (location.pathname === "/") {
    // }
    window.location.reload();
  };
  // console.log(location.pathname);
  return (
    <div>
      <button onClick={logoutFn}>Выход</button>
    </div>
  );
};

export default Logout;
