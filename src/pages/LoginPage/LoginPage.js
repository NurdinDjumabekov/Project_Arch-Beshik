import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="block_animations"></div>
      <div className="block_info">
        <div className={styles.login_block}>
          <h5>Вход в аккаунт</h5>
          <form>
            <input placeholder="Ваш логин" />
            <input placeholder="Ваш пароль" />
            <button>Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
