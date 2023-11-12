import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import styles from "./AddComment.module.scss";
import {
  addComment,
  changeDataComments,
} from "../../../store/reducers/commentSlice";

const AddComment = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const { stateDataComments } = useAppSelector((state) => state.commentSlice);

  const sendDataComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addComment({
        url: `comment_list/${id}`,
        lang: "ru",
        type: "POST",
        stateDataComments,
      })
    );
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeDataComments({
        ...stateDataComments,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className={styles.commentBlock}>
      <h4>Добавить коментарий</h4>
      <form onSubmit={sendDataComment} className={styles.formSend}>
        <input
          type="text"
          placeholder="Введите ваше имя"
          name="name"
          onChange={changeInput}
          required
        />
        <input
          type="text"
          placeholder="Введите вашу почту"
          name="email"
          onChange={changeInput}
          required
        />
        <input
          type="text"
          placeholder="Введите вашу почту"
          name="comment"
          onChange={changeInput}
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default AddComment;
