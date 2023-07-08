import React, { useState } from "react";
import styles from "./QuestionPage.module.css";
import Footer from "../../components/Footer/Footer";
import WindowsQuestion from "../../components/Windows/WindowsQuestion/WindowsQuestion";

const QuestionPage = () => {
  const [addInfo, setAddInfo] = useState(false);

  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <h1>
          Вопросы
          <button onClick={() => setAddInfo(true)}>
            Хотите задать вопрос?
          </button>
        </h1>
        <div className={styles.complaint_childBlock}>
          <div className={styles.everyComplaint}>
            <h1>
              Вопрос от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>
              Вопрос от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>
              Вопрос от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
        </div>
      </div>
      <Footer />
      {addInfo && <WindowsQuestion setAddInfo={setAddInfo} />}
    </div>
  );
};

export default QuestionPage;
