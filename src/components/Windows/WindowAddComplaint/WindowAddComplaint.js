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
        <h4>Оставить жалобу</h4>
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
