import React from "react";
import styles from "./ComplaintPage.module.css";
import Footer from "../../components/Footer/Footer";

const ComplaintPage = () => {
  // взять данные с api
  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <h1>Жалобы</h1>
        <div className={styles.complaint_childBlock}>
          <div className={styles.everyComplaint}>
            <h1>
              Жалоба от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>
              Жалоба от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>
              Жалоба от <p>sil alhlhaidh iahs</p>
            </h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComplaintPage;
