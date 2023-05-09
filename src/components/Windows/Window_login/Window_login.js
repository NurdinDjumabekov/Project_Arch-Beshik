import React, { useState } from "react";
import styles from "./Window_login.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import axios from "axios";
import {
  // changeStateForAdmin,
  changeStateLogin,
} from "../../../store/statesWindowsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Window_login = ({ setNameIcon, setStateToken }) => {
  // const { stateForAdmin } = useSelector((state) => state.statesWindowsSlice);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [moreLoginInfo, setMoreLoginInfo] = useState(true);
  const [stateLogin, setStateLogin] = useState(false);
  const [stateAuth, setStateAuth] = useState(false);
  const [stateForAdmin, setStateForAdmin] = useState(false);
  const dispatch = useDispatch();
  const baseNums = "192.168.31.218";
  const navigate = useNavigate();
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
      // console.log(responce.data.is_superuser, "is_superuser");
      localStorage.setItem("token", responce.data.token);
      localStorage.setItem("is_superuser", responce.data.is_superuser);
      setStateAuth(true);
      setNameIcon(userName);
      {
        responce.data.is_superuser ? navigate("/admin") : navigate("/");
      }
      setTimeout(() => {
        dispatch(changeStateLogin(false));
        setStateAuth(false);
      }, 2000);
      setStateToken(true);
    } catch {
      console.log("пользователь не найден");
      setStateLogin(true);
      setMoreLoginInfo(false);
      setTimeout(() => {
        setStateLogin(false);
        setMoreLoginInfo(true);
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
            {moreLoginInfo && (
              <div className={styles.block_for_password}>
                <button>Забыли пароль?</button>
                <button>Регистрация</button>
              </div>
            )}
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
