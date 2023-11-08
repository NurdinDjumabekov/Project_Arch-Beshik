import React, { ChangeEvent, useState } from "react";
import ModalWin from "../../ModalWin/ModalWin";
import styles from "./Registr.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hook";
import {
  changeDataRegistr,
  registrationUser,
} from "../../../store/reducers/registrSlice";
import InputPassword from "../../Inputs/InputPassword/InputPassword";
import InputMask from "react-input-mask";
import { errorsSendData } from "../../../helpers/errorsSendData";

const Registr = () => {
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { dataRegistr } = useAppSelector((state) => state.registrSlice);
  const { loginState } = useAppSelector((state) => state.loginSlice);

  const sendDataRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (regEmail.test(dataRegistr.email)) {
      dispatch(
        registrationUser({
          url: "register",
          lang: "ru",
          type: "POST",
          dataRegistr,
        })
      );
    } else {
      errorsSendData(dispatch);
    }
  };

  const regEmail = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeDataRegistr({ ...dataRegistr, [e.target.name]: e.target.value })
    );
  };

  return (
    <div className={styles.registr}>
      <button onClick={() => setOpenModal(true)}>Регистрация</button>
      <ModalWin
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={loginState}
      >
        <h4>Регистрация</h4>
        {loginState && (
          <p className={styles.errorLogin}>Такой пользователь уже существует</p>
        )}
        <form onSubmit={sendDataRegistration} className={styles.formSend}>
          <input
            type="text"
            placeholder="Введите ваше имя"
            name="username"
            onChange={changeInput}
            required
          />
          <input
            type="email"
            placeholder="Введите email"
            name="email"
            onChange={changeInput}
            required
          />
          {/* <input
            type="text"
            placeholder="Введите number"
            name="number"
            onChange={changeInput}
            required
          /> */}
          <InputMask
            mask="+999(999)99-99-99"
            placeholder="+996(700)75-44-54"
            value={dataRegistr?.number}
            name="number"
            onChange={changeInput}
            required
          />
          <InputPassword
            placeholder="Введите пароль"
            name="password"
            changeInput={changeInput}
          />
          <button type="submit">send</button>
        </form>
      </ModalWin>
    </div>
  );
};

export default Registr;
