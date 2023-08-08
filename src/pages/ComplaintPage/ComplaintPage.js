import React, { useEffect, useState } from "react";
import styles from "./ComplaintPage.module.css";
import Footer from "../../components/Footer/Footer";
import WindowAddComplaint from "../../components/Windows/WindowAddComplaint/WindowAddComplaint";
import arrow from "../../assests/images/Detalied/arrow.svg";
import { NavLink } from "react-router-dom";
import { toTakeAllComplaintData } from "../../store/reducers/otherAllStateSlice";
import { useDispatch, useSelector } from "react-redux";

const ComplaintPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    scrollTo(0, 0);
    dispatch(toTakeAllComplaintData());
  }, []);

  const { dataComplaint } = useSelector((state) => state.otherAllStateSlice);
  // console.log(dataComplaint);
  // взять данные с api
  const [addInfo, setAddInfo] = useState(false);
  return (
    <div className={styles.complaint_parentBlock}>
      <div className="container">
        <div className="block_animations"></div>
        <h1>
          <NavLink to={"/"}>
            <img src={arrow} alt="<" /> назад
          </NavLink>
          Жалобы
          <button onClick={() => setAddInfo(true)}>добавить жалобу</button>
        </h1>
        <div className={styles.complaint_childBlock}>
          {dataComplaint.length === 0 ? (
            <p>Список пустой</p>
          ) : (
            dataComplaint?.map((item) => (
              <div key={item.id} className={styles.everyComplaint}>
                <h1>
                  Жалоба от <p>{item.name}</p>
                </h1>
                <p>{item.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
      {addInfo && <WindowAddComplaint setAddInfo={setAddInfo} />}
    </div>
  );
};

export default ComplaintPage;
