import React, { useState } from "react";
import styles from "./WindowsQuestion.module.css";

const WindowsQuestion = ({ setAddInfo }) => {
  const [data, setData] = useState({
    name: "",
    text: "",
  });
  const addRequest = () => {
    setTimeout(() => {
      setAddInfo(false);
    }, 1000);
  };
  return (
    <div className={styles.addQuestion_parent}>
      <div className={styles.block_shadow} onClick={() => setAddInfo(false)}>
        <div className="block_animations"></div>
      </div>
      <div className={styles.addQuestion_child}>
        <h4>Оставить вопрос</h4>
        <form action="" onSubmit={addRequest}>
          <input type="text" required placeholder="Ваше имя" />
          <input type="text" required placeholder="Ваш вопрос" />
          <button type="submit">Оставить</button>
        </form>
      </div>
    </div>
  );
};

export default WindowsQuestion;
