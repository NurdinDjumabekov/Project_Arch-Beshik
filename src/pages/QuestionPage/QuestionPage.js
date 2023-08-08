import React, { useEffect, useState } from "react";
import styles from "./QuestionPage.module.css";
import Footer from "../../components/Footer/Footer";
import WindowsQuestion from "../../components/Windows/WindowsQuestion/WindowsQuestion";
import arrow from "../../assests/images/Detalied/arrow.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAllQuestionsData } from "../../store/reducers/otherAllStateSlice";

const QuestionPage = () => {
  const [addInfo, setAddInfo] = useState(false);
  const dispatch = useDispatch();
  const { dataQuestion } = useSelector((state) => state.otherAllStateSlice);

  useEffect(() => {
    scrollTo(0, 0);
    dispatch(toTakeAllQuestionsData());
  }, []);

  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <h1>
          Вопросы
          <NavLink to={"/"}>
            <img src={arrow} alt="<" /> назад
          </NavLink>
          <button onClick={() => setAddInfo(true)}>
            Хотите задать вопрос?
          </button>
        </h1>
        <div className={styles.complaint_childBlock}>
          {dataQuestion.length === 0 ? (
            <p>Список пустой</p>
          ) : (
            dataQuestion?.map((item) => (
              <div key={item.id} className={styles.everyComplaint}>
                <h1>
                  Вопрос от <p>{item.name}</p>
                </h1>
                <p>{item.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
      {addInfo && <WindowsQuestion setAddInfo={setAddInfo} />}
    </div>
  );
};

export default QuestionPage;
