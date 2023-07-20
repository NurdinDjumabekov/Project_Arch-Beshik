import React, { useEffect, useState } from "react";
import styles from "./Window_forgetPassword.module.css";
import {
  changeForgetPassword,
  changeStateLogin,
  changeStateRegistration,
} from "../../../store/reducers/windowsSlice";
import { useDispatch } from "react-redux";

const Window_forgetPassword = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    text: "",
  });
  const sendRequest = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(changeStateLogin(false));
    dispatch(changeStateRegistration(false));
    /////// закрывает предыдущие окна!!!
  }, []);
  return (
    <div className={styles.forget_password_parent}>
      <div
        className={styles.block_shadow}
        onClick={() => dispatch(changeForgetPassword(false))}
      >
        <div className="block_animations"></div>
      </div>
      <div className={styles.forget_password_child}>
        <h4>
          Оставить вопрос
          <svg
            onClick={() => dispatch(changeForgetPassword(false))}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.46409 15.5354L15.5352 8.46436"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.46409 8.46458L15.5352 15.5356"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </h4>
        <form action="" onSubmit={sendRequest}>
          <input type="email" required placeholder="Введите вашу почту" />
          <label>Мы сбросим пароль на вашу почту!</label>
          <button type="submit">сбросить пароль</button>
        </form>
      </div>
    </div>
  );
};

export default Window_forgetPassword;
