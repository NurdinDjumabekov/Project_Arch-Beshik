import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import styles from "./AddComment.module.scss";
import {
  addComment,
  changeDataComments,
} from "../../../store/reducers/commentSlice";
import { errorsSendData } from "../../../helpers/errorsSendData";

const AddComment = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const { stateDataComments } = useAppSelector((state) => state.commentSlice);
  const { commentState } = useAppSelector((state) => state.errorsSlice);
  const regEmail = /^[\w\.-]+@gmail.com$/;

  const sendDataComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stateDataComments.name.length >= 5) {
      if (regEmail.test(stateDataComments.email)) {
        if (stateDataComments.comment.length >= 5) {
          dispatch(
            addComment({
              url: `comment_list/${id}`,
              lang: "ru",
              type: "POST",
              stateDataComments,
            })
          );
        } else {
          errorsSendData(
            dispatch,
            "Ваш комментарий должен быть больше 5ти символов"
          );
        }
      } else {
        errorsSendData(dispatch, "Некорректный Email");
      }
    } else {
      errorsSendData(dispatch, "Имя должно быть больше 5ти символов");
    }
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
      {commentState.state && (
        <p className={styles.errorLogin}>{commentState.text}</p>
      )}
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
          placeholder="Введите текст"
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
