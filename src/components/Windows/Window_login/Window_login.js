import React, { useState } from "react";
import styles from "./Window_login.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import axios from "axios";
import { changeStateLogin } from "../../../store/statesWindowsSlice";
import { useDispatch } from "react-redux";

const Window_login = ({ setUserName, userName, setStateToken }) => {
  //userName и setUserName - находятся в NavMenu
  const [password, setPassword] = useState("");
  const [stateLogin, setStateLogin] = useState(false);
  const [stateAuth, setStateAuth] = useState(false);
  const dispatch = useDispatch();
  const baseNums = "192.168.31.218";

  const sendToRequestLogin = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios({
        method: "POST",
        url: `http://${baseNums}:8000/api/login/`,
        data: {
          username: userName,
          password: password,
        },
      });
      localStorage.setItem("token", responce.data.token);
      setStateAuth(true);
      setTimeout(() => {
        dispatch(changeStateLogin(false));
        setStateAuth(false);
      }, 2000);
      setStateToken(true);
    } catch {
      console.log("пользователь не найден");
      setStateLogin(true);
      setTimeout(() => {
        setStateLogin(false);
      }, 3000);
      setStateToken(false);
    }
  };
  return (
    <>
      <div
        className={styles.block_shadow}
        onClick={() => dispatch(changeStateLogin(false))}
      >
        <div className="block_animations"></div>
      </div>
      {stateAuth ? (
        <div className={styles.block_auth}>
          <h5>Вы успешно авторизовались</h5>
        </div>
      ) : (
        <div
          className={`${styles.block_for_login} ${
            stateLogin && `${styles.block_for_login_revers}`
          }`}
        >
          <h1>Вход в аккаунт</h1>
          {stateLogin && <h5>Не правильный логин или пароль!</h5>}
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
            <div className={styles.block_for_password}>
              <button>Забыли пароль?</button>
              <button>Регистрация</button>
            </div>
            <button className={styles.entrance_btn} type="submit">
              Войти
            </button>
          </form>
          <button onClick={() => dispatch(changeStateLogin(false))}>
            <img src={cross_btn} alt="x" />
          </button>
        </div>
      )}
    </>
  );
};

export default Window_login;
