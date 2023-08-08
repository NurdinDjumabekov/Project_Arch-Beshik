import React, { useState } from "react";
import styles from "./Window_registration.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  changeErrorState,
  changeRightState,
  changeStateLogin,
  changeStateRegistration,
  sendRegistrationData,
} from "../../../store/reducers/windowsSlice";

const Window_registration = () => {
  const dispatch = useDispatch();
  const { errorState, rightState } = useSelector((state) => state.windowsSlice);
  const [data, setData] = useState({
    userName: "",
    surName: "",
    name: "",
    email: "",
    password: "",
  });
  const sendToRequestRegistration = (e) => {
    e.preventDefault();
    dispatch(
      sendRegistrationData({
        userName: data.userName,
        surName: data.surName,
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    setTimeout(() => {
      location.reload();
    }, 2000);
  };
  const changeStateRegistrationAndLogin = () => {
    dispatch(changeStateLogin(true));
    dispatch(changeStateRegistration(false));
  };
  return (
    <>
      <div
        className={styles.block_shadow_registration}
        onClick={() => dispatch(changeStateRegistration(false))}
      >
        <div className="block_animations"></div>
      </div>
      {rightState ? (
        <div className={styles.block_auth}>
          <h5>Вы успешно зарегистрировались</h5>
        </div>
      ) : (
        <div
          className={`${styles.block_for_login_registration} ${
            errorState && `${styles.active_login_registration}`
          }
    `}
        >
          <h1>Регистрация</h1>
          <form action="" onSubmit={sendToRequestRegistration}>
            {errorState && <p>Ошибка</p>}
            <input
              placeholder="user name"
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  userName: e.target.value,
                }))
              }
            />
            <input
              placeholder="Ваше фамилие"
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  surName: e.target.value,
                }))
              }
            />
            <input
              placeholder="Ваше имя"
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  name: e.target.value,
                }))
              }
            />
            <input
              placeholder="Ваш Email"
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  email: e.target.value,
                }))
              }
            />
            <input
              type="password"
              placeholder="Ваш пароль"
              onChange={(e) =>
                setData((info) => ({
                  ...info,
                  password: e.target.value,
                }))
              }
            />
            <div className={styles.block_for_password}>
              <span>Есть аккаун?</span>
              <button onClick={changeStateRegistrationAndLogin}>Войти</button>
            </div>
            <button className={styles.entrance_btn} type="submit">
              Регистрация
            </button>
          </form>
          <button onClick={() => dispatch(changeStateRegistration(false))}>
            <img src={cross_btn} alt="x" />
          </button>
        </div>
      )}
    </>
  );
};

export default Window_registration;
