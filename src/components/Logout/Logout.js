import React from "react";
import axios from "axios";
import styles from "./Logout.module.css";
import { useNavigate } from "react-router-dom";

const Logout = ({ setStateToken }) => {
  const navigate = useNavigate();
  const logoutFn = async () => {
    await axios({
      method: "POST",
      url: `http://baielbekenov.pythonanywhere.com/api/logout/`,
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    setStateToken(false);
    localStorage.clear();
    navigate("/");
    location.reload();
  };
  return (
    <div>
      <button onClick={logoutFn}>Выход</button>
    </div>
  );
};

export default Logout;
