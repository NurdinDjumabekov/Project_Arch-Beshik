import React, { useEffect } from "react";
import styles from "./HistoryPage.module.css";
import Footer from "../../components/Footer/Footer";
import img_history from "../../assests/images/history/history_img.png";
import { useDispatch, useSelector } from "react-redux";
import { toTakeDataHistory } from "../../store/reducers/otherAllStateSlice";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const { dataHistory } = useSelector((state) => state.otherAllStateSlice);
  useEffect(() => {
    dispatch(toTakeDataHistory());
  }, []);
  // console.log(dataHistory);
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
            {dataHistory?.map((item) => console.log(item))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryPage;
