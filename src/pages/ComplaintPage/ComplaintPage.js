import React from "react";
import styles from "./ComplaintPage.module.css";
import Footer from "../../components/Footer/Footer";

const ComplaintPage = () => {
  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <div className={styles.complaint_childBlock}>
          <div className={styles.everyComplaint}>
            <h1>Жалоба от Владимир</h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>Жалоба от Владимир</h1>
            <p>
              20 сентября 2023 года, Заметил хозяина красной бмв не
              пропускающего бабушку по пешеходному переходу гос номер 01 013 ZAK
            </p>
          </div>
          <div className={styles.everyComplaint}>
            <h1>Жалоба от Владимир</h1>
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
