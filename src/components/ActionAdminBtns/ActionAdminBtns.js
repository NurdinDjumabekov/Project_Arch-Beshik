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
  const [confirmation, setConfirmation] = useState(false);
  const token = localStorage.getItem("token");
  const requestDeletePost = async () => {
    try {
      const request = await axios({
        method: "DELETE",
        url: `http://baielbekenov.pythonanywhere.com/api/content_delete/${cardInfo.id}/`,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${token}`,
        },
      });
      // console.log(request);
      setConfirmation(true);
    } catch {
      console.log("error! Request Delete");
      setConfirmation(true);
    }
  };

  const changeButtonEdit = () => {
    setForIconEdit(true);
  };
  return (
    <>
      {stateDeleteBtn && (
        <button
          className={styles.ntm_delete}
          onClick={() => setConfirmation(true)}
        >
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
      {confirmation && (
        <div className={styles.block_for_delete}>
          <h6>Вы уверены что хотите удалить этот блок? </h6>
          <div>
            <button onClick={requestDeletePost}>Удалить этот блок</button>
            <button onClick={() => setConfirmation(false)}>Отмена</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionAdminBtns;
