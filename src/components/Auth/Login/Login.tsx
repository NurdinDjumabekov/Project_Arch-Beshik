import React, { ChangeEvent, useState } from "react";
import ModalWin from "../../ModalWin/ModalWin";
import styles from "./Login.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { changeDataLogin, loginUser } from "../../../store/reducers/loginSlice";
import InputPassword from "../../Inputs/InputPassword/InputPassword";
import { errorsSendData } from "../../../helpers/errorsSendData";

const Login = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { dataLogin } = useAppSelector((state) => state.loginSlice);
  const { loginState } = useAppSelector((state) => state.errorsSlice);
  const dispatch = useAppDispatch();

  const sendDataLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataLogin.username.length >= 5) {
      if (dataLogin.password.length >= 5) {
        dispatch(
          loginUser({ url: "login", lang: "ru", type: "POST", dataLogin })
        );
      } else {
        errorsSendData(dispatch, "Пароль должен содержать больше 5ти символов");
      }
    } else {
      errorsSendData(dispatch, "Имя должно быть больше 5ти символов");
    }
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(
      changeDataLogin({ ...dataLogin, [e.target.name]: e.target.value })
    );
  };

  return (
    <div className={styles.login}>
      <button onClick={() => setOpenModal(true)}>Вход</button>
      <ModalWin
        openModal={openModal}
        setOpenModal={setOpenModal}
        color={loginState.state}
      >
        <h4>Вход в аккаунт</h4>
        {loginState.state && (
          <p className={styles.errorLogin}>{loginState.text}</p>
        )}
        <form onSubmit={sendDataLogin} className={styles.formSend}>
          <input
            type="text"
            placeholder="Введите логин"
            name="username"
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

export default Login;
