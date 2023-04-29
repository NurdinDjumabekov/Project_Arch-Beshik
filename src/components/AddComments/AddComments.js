import React, { useState } from "react";
import styles from "./AddComments.module.css";
import axios from "axios";

const AddComments = ({ setAddComment }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  //   console.log(name, email, comment);
  const addCommentsFN = (e) => {
    e.preventDefault();
    try {
      axios({
        method: "POST",
        url: "https://6443c7ca90738aa7c0778850.mockapi.io/infoportal",
        data: {
          name: name,
          email: email,
          comment: comment,
        },
      }).then((response) => console.log(response));
    } catch {
      console.log("error");
    }
  };
  return (
    <div className={styles.parentBlock_addComment}>
      <form action="" onSubmit={addCommentsFN}>
        <input
          type="text"
          placeholder="Ваше имя"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ваш Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="Ваш коментарий"
        ></textarea>
        <button onClick={() => setAddComment(false)}>
          Оставить коментарий
        </button>
      </form>
      <button
        type="submit"
        className={styles.cancelBtn}
        onClick={() => setAddComment(false)}
      >
        Отмена
      </button>
    </div>
  );
};

export default AddComments;
