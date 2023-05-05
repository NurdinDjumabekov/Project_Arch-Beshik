import React, { useState } from "react";
import styles from "./ActionAdminBtns.module.css";
import { useSelector } from "react-redux";
import btn_delete from "../../assests/images/adminPage/delete_btn.svg";
import btn_edit from "../../assests/images/adminPage/edit_btn.svg";
import axios from "axios";
const ActionAdminBtns = ({ cardInfo }) => {
  const { stateDeleteBtn, stateEditBtn } = useSelector(
    (state) => state.stateforAdminSlice
  );
  const baseNums = "192.168.0.105";
  const requestDeletePost = async () => {
    try {
      const request = await axios.delete(
        `http://${baseNums}:8000/api/content_delete/${cardInfo.id}/`
      );
      console.log(request);
    } catch {
      console.log("error! Request Delete");
    }
  };

  return (
    <>
      {stateDeleteBtn && (
        <button className={styles.ntm_delete} onClick={requestDeletePost}>
          <img src={btn_delete} alt="btn" />
        </button>
      )}
      {stateEditBtn && (
        <button className={styles.ntm_edit}>
          <img src={btn_edit} alt="btn" />
        </button>
      )}
    </>
  );
};

export default ActionAdminBtns;
