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
  const { registrState } = useAppSelector((state) => state.errorsSlice);
  const regEmail = /^[\w\.-]+@gmail.com$/;
  const regExpNum = /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/;

  const sendDataRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataRegistr.username.length >= 5) {
      if (regEmail.test(dataRegistr.email)) {
        if (regExpNum.test(dataRegistr.number)) {
          if (dataRegistr.password.length >= 5) {
            dispatch(
              registrationUser({
                url: "register",
                lang: "ru",
                type: "POST",
                dataRegistr,
              })
            );
          } else {
            errorsSendData(
              dispatch,
              "Пароль должен содержать больше 5ти символов"
            );
          }
        } else {
          errorsSendData(dispatch, "Некорректный номер");
        }
      } else {
        errorsSendData(dispatch, "Некорректный Email");
      }
    } else {
      errorsSendData(dispatch, "Имя должно быть больше 5ти символов");
    }
  };

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
        color={registrState.state}
      >
        <h4>Регистрация</h4>
        {registrState.state && (
          <p className={styles.errorLogin}>{registrState.text}</p>
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
          <button type="submit">Отправить</button>
        </form>
      </ModalWin>
    </div>
  );
};

export default Registr;
