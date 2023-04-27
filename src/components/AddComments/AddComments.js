import React from "react";
import styles from "./AddComments.module.css";

const AddComments = ({ setAddComment }) => {
  return (
    <div className={styles.parentBlock_addComment}>
      <form>
        <input placeholder="Ваше имя" />
        <input placeholder="Ваш Email" />
        <textarea placeholder="Ваш коментарий"></textarea>
        <button>Оставить коментарий</button>
      </form>
      <button className={styles.cancelBtn} onClick={() => setAddComment(false)}>
        Отмена
      </button>
    </div>
  );
};

export default AddComments;
