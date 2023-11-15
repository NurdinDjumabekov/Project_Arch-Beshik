import React, { ChangeEvent } from "react";
import ModalWin from "../ModalWin/ModalWin";
import styles from "./QuestionsPage.module.scss";
import {
  changeDataQuestion,
  sendQuestions,
} from "../../store/reducers/questionSlice";
import { useAppDispatch, useAppSelector } from "../../hook";

interface stateProps {
  setOpenModal: (value: boolean) => void;
  openModal: boolean;
}

const QuestionsSend: React.FC<stateProps> = (props) => {
  const dispatch = useAppDispatch();
  const { dataQuestions } = useAppSelector((state) => state.questionSlice);

  const sendDataQuestion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (dataQuestions.username.length >= 5) {
    //   if (dataQuestions.question.length >= 5) {
    //     dispatch(
    //       sendQuestions({
    //         url: "register",
    //         lang: "ru",
    //         type: "POST",
    //         dataQuestions,
    //       })
    //     );
    //   } else {
    //     errorsSendData(dispatch, "Пароль должен содержать больше 5ти символов");
    //   }
    // } else {
    //   errorsSendData(dispatch, "Имя должно быть больше 5ти символов");
    // }
  };

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeDataQuestion({ ...dataQuestions, [e.target.name]: e.target.value })
    );
  };
  console.log(dataQuestions);

  return (
    <div className={styles.question}>
      <ModalWin
        openModal={props.openModal}
        setOpenModal={props.setOpenModal}
        color={false}
      >
        <h4>Задать вопрос</h4>
        {/* {registrState.state && (
          <p className={styles.errorLogin}>{registrState.text}</p>
        )} */}
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
