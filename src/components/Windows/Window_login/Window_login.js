import React, { useState } from "react";
import styles from "./Window_login.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import axios from "axios";
import { changeStateLogin } from "../../../store/statesWindowsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Window_login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
//http://192.168.0.111:8000/
  const sendToRequestLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://192.168.31.218:8000/api/login/",
      data: {
        username: userName,
        password: password,
      },
    });
    dispatch(changeStateLogin(false));
    navigate("/admin");
  };
  return (
    <>
      <div
        className={styles.block_shadow}
        onClick={() => dispatch(changeStateLogin(false))}
      ></div>
      <div className={styles.block_for_login}>
        <h1>Вход в аккаунт</h1>
        <form action="" onSubmit={sendToRequestLogin}>
          <input
            placeholder="Ваш логин"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ваш пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.entrance_btn}
            type="submit"
            onClick={() => dispatch(changeStateLogin(false))}
          >
            Войти
          </button>
        </form>
        <div className={styles.block_for_password}>
          <button>Регистрация</button>
          <button>Cброс пароля</button>
        </div>
        <button onClick={() => dispatch(changeStateLogin(false))}>
          <img src={cross_btn} alt="x" />
        </button>
      </div>
    </>
  );
};

export default Window_login;
