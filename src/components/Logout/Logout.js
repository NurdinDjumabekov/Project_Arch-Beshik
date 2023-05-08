import React from "react";
import axios from "axios";
import styles from "./Logout.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = ({ setStateToken }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const baseNums = "192.168.31.218";
  const logoutFn = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "POST",
      url: `http://${baseNums}:8000/api/logout/`,
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    setStateToken(false);
    localStorage.clear();
    navigate("/");
    if (location.pathname === "/") {
      window.location.reload();
    }
  };
  console.log(location.pathname);
  return (
    <div>
      <button onClick={logoutFn}>Выход</button>
    </div>
  );
};

export default Logout;
