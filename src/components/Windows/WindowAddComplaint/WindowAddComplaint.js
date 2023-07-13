import React, { useState } from "react";
import styles from "./WindowAddComplaint.module.css";

const WindowAddComplaint = ({ setAddInfo }) => {
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
    <div className={styles.addComplaint_parent}>
      <div className={styles.block_shadow} onClick={() => setAddInfo(false)}>
        <div className="block_animations"></div>
      </div>
      <div className={styles.addComplaint_child}>
        <h4>
          Оставить жалобу
          <svg
            onClick={() => setAddInfo(false)}
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
        <form action="" onSubmit={addRequest}>
          <input type="text" required placeholder="Ваше имя" />
          <input type="text" required placeholder="Ваша жалоба" />
          <button type="submit">Оставить</button>
        </form>
      </div>
    </div>
  );
};

export default WindowAddComplaint;
