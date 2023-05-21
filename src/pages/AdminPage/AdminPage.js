import React, { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";
import AddPosts from "../../components/AddPosts/AddPosts";
import MainPage from "../MainPage/MainPage";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateAdvertisingBtn,
  changeStateDeleteBtn,
  changeStateEditBtn,
  changeStateForSlider,
} from "../../store/stateforAdminSlice";
import AddAdvertising from "../../components/AddAdvertising/AddAdvertising";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const [adminInput, setAdminInput] = useState(false);
  const [stateAdmin, setstateAdmin] = useState(
    localStorage.getItem("stateAdmin")
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { objForChangeInfo } = useSelector((state) => state.infoWorkSlice);
  useEffect(() => {
    dispatch(changeStateForSlider(false));
  }, [objForChangeInfo.stateRequestOnCategory]);
  const changeStateBtnEdit = () => {
    dispatch(changeStateEditBtn(true));
    dispatch(changeStateDeleteBtn(false));
  };

  const changeStateBtnDelete = () => {
    dispatch(changeStateDeleteBtn(true));
    dispatch(changeStateEditBtn(false));
  };

  const changeStateAdvertising = () => {
    dispatch(changeStateAdvertisingBtn(true));
  };
  return (
    <>
      {stateAdmin && (
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
                <button onClick={changeStateBtnEdit}>
                  Редактирование поста
                </button>
                <button onClick={changeStateBtnDelete}>Удаление постов</button>
                <button onClick={changeStateAdvertising}>
                  Добавить рекламу
                </button>
                <button onClick={() => navigate("/complaint")}>
                  Жалобы жителей
                </button>
              </div>
            </div>
          </div>
          <MainPage />
          {adminInput && <AddPosts setAdminInput={setAdminInput} />}
          <AddAdvertising />
        </>
      )}
    </>
  );
};

export default AdminPage;
