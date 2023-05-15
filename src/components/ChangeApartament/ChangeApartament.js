import React, { useState } from "react";
import styles from "./ChangeApartament.module.css";
import { useSelector } from "react-redux";
import btn_delete from "../../assests/images/adminPage/delete_btn.svg";
import btn_edit from "../../assests/images/adminPage/edit_btn.svg";
import axios from "axios";
import EditApartaments from "../EditApartaments/EditApartaments";
const ChangeApartament = ({ apartamentInfo }) => {
  const { stateDeleteBtn, stateEditBtn } = useSelector(
    (state) => state.stateforAdminSlice
  );
  const [ForIconEdit, setForIconEdit] = useState(false);
  const token = localStorage.getItem("token");
  const requestDeletePost = async () => {
    try {
      const request = await axios({
        method: "DELETE",
        url: `http://baielbekenov.pythonanywhere.com/....................`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });
      // console.log(request);
    } catch {
      console.log("error! Request Delete");
    }
  };

  const changeButtonEdit = () => {
    setForIconEdit(true);
  };

  return (
    <>
      {stateDeleteBtn && (
        <button className={styles.ntm_delete} onClick={requestDeletePost}>
          <img src={btn_delete} alt="btn" />
        </button>
      )}
      {stateEditBtn && (
        <button className={styles.ntm_edit} onClick={changeButtonEdit}>
          <img src={btn_edit} alt="btn" />
        </button>
      )}
      {ForIconEdit && (
        <EditApartaments
          setForIconEdit={setForIconEdit}
          apartamentInfo={apartamentInfo}
        />
      )}
    </>
  );
};

export default ChangeApartament;
