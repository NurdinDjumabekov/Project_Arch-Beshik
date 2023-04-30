import React from "react";
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className="container">
      <div className={styles.parent_preloaderBlock}>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <div className={styles.load}></div>
        <span>загрузка........</span>
      </div>
    </div>
  );
};

export default Preloader;
