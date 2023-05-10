import React, { useState } from "react";
import styles from "./ActionAdminBtns.module.css";
import { useSelector } from "react-redux";
import btn_delete from "../../assests/images/adminPage/delete_btn.svg";
import btn_edit from "../../assests/images/adminPage/edit_btn.svg";
import axios from "axios";
import EditPosts from "../EditPosts/EditPosts";
const ActionAdminBtns = ({ cardInfo }) => {
  const { stateDeleteBtn, stateEditBtn } = useSelector(
    (state) => state.stateforAdminSlice
  );
  const [ForIconEdit, setForIconEdit] = useState(false);
  const token = localStorage.getItem("token");
  const baseNums = "192.168.198.218";
  const requestDeletePost = async () => {
    try {
      const request = await axios({
        method: "DELETE",
        url: `http://${baseNums}:8000/api/content_delete/${cardInfo.id}/`,
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

  // const requestEditPost = async () => {
  //   try {
  //     const request = await axios({
  //       method: "PUT",
  //       url: `http://${baseNums}:8000/api/content_delete/${cardInfo.id}/`,
  //       data: {},
  //     });
  //   } catch {
  //     console.log("error");
  //   }
  // };
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
        <EditPosts setForIconEdit={setForIconEdit} cardInfo={cardInfo} />
      )}
    </>
  );
};

export default ActionAdminBtns;
