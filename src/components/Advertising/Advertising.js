import React, { useEffect, useState } from "react";
import styles from "./Advertising.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toTakeAdvertising } from "../../store/reducers/otherAllStateSlice";

export const Advertising = () => {
  const dispatch = useDispatch();

  const [closeModal, setCloseModal] = useState(false);

  const { dataAdvertising } = useSelector((state) => state.otherAllStateSlice);

  //////////////
  useEffect(() => {
    dispatch(toTakeAdvertising());
    setTimeout(() => {
      setCloseModal(true);
    }, 20000);
  }, []);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count === dataAdvertising.length - 1 ? 0 : count + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);
  // console.log(count);
  return (
    <>
      <div className={styles.advertising_parent}>
        <h4>Реклама</h4>
        <ul>
          {dataAdvertising?.map((item) => (
            <li key={item.id}>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
              <button>{item.phone_number}</button>
            </li>
          ))}
        </ul>
      </div>
      {closeModal && (
        <div className={styles.advertising_mobile_version}>
          <ul>
            {
              <li>
                <h6>{dataAdvertising[count].title}</h6>
                <p>{dataAdvertising[count].text}</p>
                <button>{dataAdvertising[count]?.phone_number}</button>
                <button
                  className={styles.close}
                  onClick={() => setCloseModal(false)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.46409 15.5354L15.5352 8.46436"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.46409 8.46458L15.5352 15.5356"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </li>
            }
          </ul>
        </div>
      )}
    </>
  );
};
