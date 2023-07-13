import React, { useEffect, useState } from "react";
import styles from "./ComplaintPage.module.css";
import Footer from "../../components/Footer/Footer";
import WindowAddComplaint from "../../components/Windows/WindowAddComplaint/WindowAddComplaint";

const ComplaintPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  // взять данные с api
  const [addInfo, setAddInfo] = useState(false);
  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <h1>
          Жалобы
          <button onClick={() => setAddInfo(true)}>добавить жалобу</button>
        </h1>
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
      {addInfo && <WindowAddComplaint setAddInfo={setAddInfo} />}
    </div>
  );
};

export default ComplaintPage;
