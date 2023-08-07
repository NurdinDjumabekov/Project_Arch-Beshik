import React, { useEffect, useState } from "react";
import styles from "./DetailedPhotos.module.css";
import imgsss from "../../assests/images/main/bac-d_2.jpg";
import imgsss_1 from "../../assests/images/Detalied/users_comment.svg";
import { NavLink } from "react-router-dom";
import arrow from "../../assests/images/Detalied/arrow.svg";

const DetailedPhotos = ({ data }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (Array.isArray(data?.photos) && data?.photos.length > 0) {
      setCount(data.photos[0].id - data.photos[0].id + 1);
      console.log(count);
    } else {
      setCount(0);
    }
  }, [data?.photos]);

  console.log(data, "nur");
  // const [data, setDate] = useState([
  //   { id: 1, photo: imgsss },
  //   { id: 2, photo: imgsss_1 },
  //   { id: 3, photo: imgsss },
  //   { id: 4, photo: imgsss_1 },
  //   { id: 5, photo: imgsss },
  //   { id: 6, photo: imgsss_1 },
  //   { id: 7, photo: imgsss },
  //   { id: 8, photo: imgsss_1 },
  // ]);
  return (
    <>
      <div className={styles.toBack}>
        <NavLink to={"/"}>
          <img src={arrow} alt="<" /> назад
        </NavLink>
      </div>
      <div className={styles.block_for_imgsDetailed}>
        <button
          className={styles.btn_changePhoto}
          onClick={() => setCount(count <= 0 ? 0 : count - 1)}
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="41.1792"
              y="41.1514"
              width="40.6127"
              height="40.6127"
              rx="15"
              transform="rotate(-180 41.1792 41.1514)"
              fill="transprent"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.3085 28.5116C23.8128 29.0072 23.0092 29.0072 22.5136 28.5116L15.7448 21.7428C15.2492 21.2472 15.2492 20.4436 15.7448 19.948L22.5136 13.1792C23.0092 12.6835 23.8128 12.6835 24.3085 13.1792C24.8041 13.6748 24.8041 14.4784 24.3085 14.974L18.4371 20.8454L24.3085 26.7167C24.8041 27.2124 24.8041 28.0159 24.3085 28.5116Z"
              fill="black"
            />
          </svg>
        </button>
        <div className={styles.block_for_bigPhoto}>
          {data?.photos && data.photos.length > 0 && (
            <img src={data.photos[count].image} alt="фотка" />
          )}
        </div>
        <button
          className={styles.btn_changePhoto}
          onClick={() =>
            setCount(
              count >= data?.photos?.length - 1
                ? data?.photos?.length - 1
                : count + 1
            )
          }
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.823242"
              y="0.540039"
              width="40.6127"
              height="40.6127"
              rx="15"
              fill="transprent"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.694 13.1798C18.1896 12.6842 18.9932 12.6842 19.4888 13.1798L26.2576 19.9486C26.7532 20.4442 26.7532 21.2478 26.2576 21.7435L19.4888 28.5122C18.9932 29.0079 18.1896 29.0079 17.694 28.5122C17.1984 28.0166 17.1984 27.213 17.694 26.7174L23.5653 20.846L17.694 14.9747C17.1984 14.479 17.1984 13.6755 17.694 13.1798Z"
              fill="black"
            />
          </svg>
        </button>
        <ul className={styles.block_for_miniPhoto}>
          {data?.photos?.map((img) => (
            <li key={img.id}>
              <button onClick={() => setCount(img.id - 1)}>
                <div>
                  <img src={img?.image} alt="фотка" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DetailedPhotos;
