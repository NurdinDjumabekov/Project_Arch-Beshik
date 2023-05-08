import React from "react";
import styles from "./Window_registration.module.css";
import cross_btn from "../../../assests/images/Windows/cross_img.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeStateRegistration } from "../../../store/statesWindowsSlice";

const Window_registration = () => {
  const dispatch = useDispatch();
  const sendToRequestRegistration = (e) => {
    e.preventDefault();
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
      <div className={styles.block_for_login_registration}>
        <h1>Регистрация</h1>
        <form action="" onSubmit={sendToRequestRegistration}>
          <input
            placeholder="Ваш логин"
            // onChange={(e) => setUserName(e.target.value)}
          />
          <input placeholder="Ваш Email" />
          <input
            type="password"
            placeholder="Ваш пароль"
            // onChange={(e) => setPassword(e.target.value)}
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
