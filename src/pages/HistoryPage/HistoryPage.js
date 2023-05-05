import React from "react";
import styles from "./HistoryPage.module.css";
import Footer from "../../components/Footer/Footer";
import img_history from "../../assests/images/history/history_img.png";

const HistoryPage = () => {
  return (
    <>
      <div className="container">
        <div className="block_push"></div>
        <div className={styles.parentBlock_forHistory}>
          <h2>История</h2>
          <ul>
            <li>
              <div>
                <img src={img_history} alt="" />
              </div>
              <p>
                Самый много населенный Жил-массив в Бишкеке Относящийся к
                истокам зарождения города Имея населения с выше 100 тысяч
                жителей.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
