import React, { useState } from "react";
import styles from "./Window_login.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import axios from "axios";
import {
  changeDataToken,
  changeStateLogin,
  changeStateRegistration,
  changeForgetPassword,
} from "../../../store/reducers/windowsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeStateGoodAuthLogin } from "../../../store/reducers/windowsSlice";
// import sendRequestLoginUser from "../../../helpers/sendRequestLogin";

const Window_login = ({ setStateToken }) => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [stateLogin, setStateLogin] = useState(false);
  const { stateGoodAuthLogin } = useSelector((state) => state.windowsSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sendToRequestLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://baielbekenov.pythonanywhere.com/api/login/`,
        data: {
          username: userName,
          password: password,
        },
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", userName);
      dispatch(changeDataToken(data.token));
      // localStorage.setItem("email", email); тут должен быть email
      dispatch(changeStateGoodAuthLogin(true));
      setTimeout(() => {
        dispatch(changeStateGoodAuthLogin(false));
        dispatch(changeStateLogin(false));
        location.reload();
      }, 2000);
      setStateToken(true);
    } catch (err) {
      setStateLogin(true);
      setTimeout(() => {
        setStateLogin(false);
      }, 3000);
      setStateToken(false);
      console.log(err);
    }
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
                <button onClick={() => dispatch(changeForgetPassword(true))}>
                  Забыли пароль?
                </button>
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
