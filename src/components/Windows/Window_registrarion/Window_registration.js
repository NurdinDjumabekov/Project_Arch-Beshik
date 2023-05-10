import React, { useState } from "react";
import styles from "./Window_registration.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeStateRegistration } from "../../../store/statesWindowsSlice";
import axios from "axios";

const Window_registration = () => {
  const baseNums = "192.168.198.218";
  const [userName, setUserName] = useState("");
  const [surName, setSurName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sendToRequestRegistration = (e) => {
    e.preventDefault();
    try {
      const responce = axios({
        method: "POST",
        url: `http://${baseNums}:8000/api/register/`,
        data: {
          username: userName,
          first_name: name,
          last_name: surName,
          email: email,
          password: password,
        },
      });
      console.log(responce.data);
      localStorage.setItem("token", responce.data.token);
      dispatch(changeStateRegistration(false));
    } catch {
      console.log("Вы не смогли пройти регистрацию!");
    }
  };
  return (
    <>
      <div
        className={styles.block_shadow_registration}
        onClick={() => dispatch(changeStateRegistration(false))}
      >
        <div className="block_animations"></div>
      </div>
      <div className={styles.block_for_login_registration}>
        <h1>Регистрация</h1>
        <form action="" onSubmit={sendToRequestRegistration}>
          <input
            placeholder="user name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="Ваше фамилие"
            onChange={(e) => setSurName(e.target.value)}
          />
          <input
            placeholder="Ваше имя"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Ваш Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ваш пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={styles.block_for_password}>
            <span>Есть аккаун?</span>
            <button>Войти</button>
          </div>
          <button className={styles.entrance_btn} type="submit">
            Регистрация
          </button>
        </form>

        <button onClick={() => dispatch(changeStateRegistration(false))}>
          <img src={cross_btn} alt="x" />
        </button>
      </div>
    </>
  );
};

export default Window_registration;
