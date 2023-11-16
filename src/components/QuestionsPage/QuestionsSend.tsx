import React, { ChangeEvent } from "react";
import ModalWin from "../ModalWin/ModalWin";
import styles from "./QuestionsPage.module.scss";
import {
  changeDataQuestion,
  sendQuestions,
} from "../../store/reducers/questionSlice";
import { useAppDispatch, useAppSelector } from "../../hook";
import { errorsSendData } from "../../helpers/errorsSendData";

interface stateProps {
  setOpenModal: (value: boolean) => void;
  openModal: boolean;
}

const QuestionsSend: React.FC<stateProps> = (props) => {
  const dispatch = useAppDispatch();
  const { dataQuestions } = useAppSelector((state) => state.questionSlice);
  const { questionState } = useAppSelector((state) => state.errorsSlice);

  const sendDataQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (dataQuestions.username.length >= 5) {
      if (dataQuestions.question.length >= 5) {
        dispatch(
          sendQuestions({
            url: "question",
            lang: "ru",
            type: "POST",
            dataQuestions,
          })
        );
      } else {
        errorsSendData(dispatch, "Ваш вопрос должен быть больше 10ти символов");
      }
    } else {
      errorsSendData(dispatch, "Ваше имя должно содержать больше 5ти символов");
    }
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeDataQuestion({ ...dataQuestions, [e.target.name]: e.target.value })
    );
  };

  return (
    <div className={styles.question}>
      <ModalWin
        openModal={props.openModal}
        setOpenModal={props.setOpenModal}
        color={questionState.state}
      >
        <h4>Задать вопрос</h4>
        {questionState.state && (
          <p className={styles.errorLogin}>{questionState.text}</p>
        )}
        <form onSubmit={sendDataQuestion} className={styles.formSend}>
          <input
            type="text"
            placeholder="Введите ваше имя"
            name="username"
            onChange={changeInput}
            required
          />
          <input
            type="text"
            placeholder="Введите ваш вопрос"
            name="question"
            onChange={changeInput}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      </ModalWin>
    </div>
  );
};

export default QuestionsSend;
