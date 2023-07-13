import React, { useState } from "react";
import styles from "./Window_login.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import axios from "axios";
import {
  changeStateLogin,
  changeStateRegistration,
} from "../../../store/reducers/windowsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeStateGoodAuthLogin } from "../../../store/reducers/windowsSlice";
import { sendRequestLogin } from "../../../helpers/sendRequestLogin";

const Window_login = ({ setNameIcon, setStateToken }) => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [stateLogin, setStateLogin] = useState(false);
  const { stateGoodAuthLogin } = useSelector((state) => state.windowsSlice);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendToRequestLogin = (e) => {
    console.log("jsbfdjs32511");
    e.preventDefault();
    sendRequestLogin();
  };
  const changeStateLoginAndRegistration = () => {
    dispatch(changeStateRegistration(true));
    dispatch(changeStateLogin(false));
  };
  return (
    <>
      <div
        className={styles.block_shadow}
        onClick={() => dispatch(changeStateLogin(false))}
      >
        <div className="block_animations"></div>
      </div>
      {stateGoodAuthLogin ? (
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
            {!stateLogin && (
              <div className={styles.block_for_password}>
                <button>Забыли пароль?</button>
                <button onClick={changeStateLoginAndRegistration}>
                  Регистрация
                </button>
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
