import React from "react";
import axios from "axios";
import styles from "./Logout.module.css";
import { useNavigate } from "react-router-dom";
import { changeDataToken } from "../../store/reducers/windowsSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutFn = () => {
    // await axios({
    //   method: "POST",
    //   url: `http://127.0.0.1:8000/api/logout/`,
    //   headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`,
    //   },
    // });
    dispatch(changeDataToken(""));
    localStorage.clear();
    navigate("/");
    location.reload();
  };
  return (
    <>
      <div>
        <button onClick={() => logoutFn()}>Выход</button>
      </div>
      <p className={styles.name_user}>{localStorage.getItem("name")}</p>
    </>
  );
};

export default Logout;
