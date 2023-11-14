import React from "react";
import styles from "./QuestionsPage.module.scss";

const QuestionsPage = () => {
  return (
    <div className={styles.questionBlock}>
      <div className="container">
        <div className={styles.questionBlock__inner}></div>
      </div>
    </div>
  );
};

export default QuestionsPage;
