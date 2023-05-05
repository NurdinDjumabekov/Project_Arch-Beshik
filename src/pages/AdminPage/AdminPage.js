import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import AddPosts from "../../components/AddPosts/AddPosts";
import MainPage from "../MainPage/MainPage";
import { useDispatch } from "react-redux";
import {
  changeStateDeleteBtn,
  changeStateEditBtn,
  changeStateForSlider,
} from "../../store/stateforAdminSlice";

const AdminPage = () => {
  const [adminInput, setAdminInput] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeStateForSlider(false));
  }, []);
  const changeStateBtnEdit = () => {
    dispatch(changeStateEditBtn(true));
    dispatch(changeStateDeleteBtn(false));
  };

  const changeStateBtnDelete = () => {
    dispatch(changeStateDeleteBtn(true));
    dispatch(changeStateEditBtn(false));
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="block_push"></div>
          <h1>
            Добро пожаловать, <span>админ</span>
          </h1>
          <div className={styles.block_for_btnsMain}>
            <button onClick={() => setAdminInput(!adminInput)}>
              Добавление постов
            </button>
            <button onClick={changeStateBtnEdit}>Редактирование поста</button>
            <button onClick={changeStateBtnDelete}>Удаление постов</button>
          </div>
        </div>
      </div>
      <MainPage />
      {adminInput && <AddPosts setAdminInput={setAdminInput} />}
    </>
  );
};

export default AdminPage;
