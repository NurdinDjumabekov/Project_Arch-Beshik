import React, { useEffect, useState } from "react";
import styles from "./AddComments.module.css";
import axios from "axios";

const AddComments = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    comment: "",
  });
  const [stateToken, setStateToken] = useState("");
  useEffect(() => {
    setStateToken(localStorage.getItem("token"));
  }, []);
  const addCommentHaveUser = (e) => {
    e.preventDefault();
    try {
      axios({
        method: "POST",
        url: "",
        data: {},
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addCommentHaveNotUser = (e) => {
    e.preventDefault();
    try {
      axios({
        method: "POST",
        url: "",
        data: {},
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.block_for_addComment}>
      <h5>Оставить комментарий</h5>
      {stateToken ? (
        <form action="" onSubmit={addCommentHaveUser}>
          <textarea
            placeholder="Ваш кометарий"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                comment: e.target.value,
              }))
            }
            value={data.comment}
          ></textarea>
          <button type="submit">Оставить комментарий</button>
        </form>
      ) : (
        <form action="" onSubmit={addCommentHaveNotUser}>
          <input
            placeholder="Ваш Email"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                email: e.target.value,
              }))
            }
            value={data.email}
          />
          <input
            placeholder="ваше имя"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                name: e.target.value,
              }))
            }
            value={data.name}
          />
          <textarea
            placeholder="Ваш кометарий"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                comment: e.target.value,
              }))
            }
            value={data.comment}
          ></textarea>
          <button type="submit">Оставить комментарий</button>
        </form>
      )}
    </div>
  );
};

export default AddComments;
