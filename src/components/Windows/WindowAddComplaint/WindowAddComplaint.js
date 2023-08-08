import React, { useState } from "react";
import styles from "./WindowAddComplaint.module.css";
import { useDispatch } from "react-redux";
import {
  toSendComplaintData,
  toTakeAllComplaintData,
} from "../../../store/reducers/otherAllStateSlice";

const WindowAddComplaint = ({ setAddInfo }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    text: "",
  });
  const addRequest = (e) => {
    e.preventDefault();
    dispatch(toSendComplaintData({ name: data.name, text: data.text }));
    setTimeout(() => {
      dispatch(toTakeAllComplaintData());
      setAddInfo(false);
    }, 1000);
  };

  return (
    <div className={styles.addComplaint_parent}>
      <div className={styles.block_shadow} onClick={() => setAddInfo(false)}>
        <div className="block_animations"></div>
      </div>
      <div className={styles.addComplaint_child}>
        <h4>
          Оставить жалобу
          <svg
            onClick={() => setAddInfo(false)}
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
        </h4>
        <form action="" onSubmit={addRequest}>
          <input
            type="text"
            required
            onChange={(e) =>
              setData((info) => ({
                ...info,
                name: e.target.value,
              }))
            }
            placeholder="Ваше имя"
          />
          <input
            type="text"
            onChange={(e) =>
              setData((info) => ({
                ...info,
                text: e.target.value,
              }))
            }
            required
            placeholder="Ваша жалоба"
          />
          <button type="submit">Оставить</button>
        </form>
      </div>
    </div>
  );
};

export default WindowAddComplaint;
