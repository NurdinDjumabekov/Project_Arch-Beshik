import React, { useEffect, useState } from "react";
import styles from "./Advertising.module.css";
import axios from "axios";

export const Advertising = () => {
  const advertisinginfo = [
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер Если вам нужен сайт, то звоните на этот номер Если вам нужен сайт, то звоните на этот номерЕсли вам нужен сайт, то звоните на этот номер Если вам нужен сайт, то звоните на этот номер Если вам нужен сайт, то звоните на этот номер Если вам нужен сайт, то звоните на этот номер ",
      phone: "+996700754454",
    },
    {
      id: 2,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996502024364",
    },
    {
      id: 3,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700750000",
    },

    {
      id: 4,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996502024964",
    },
    {
      id: 5,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 6,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 7,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 8,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 9,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 10,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 11,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 12,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
  ];
  const [closeModal, setCloseModal] = useState(false);

  const [info, setInfo] = useState([]);
  //// запрос на рекламу
  const sendAdvertising = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "",
      });
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };
  //////////////
  useEffect(() => {
    sendAdvertising();
    setTimeout(() => {
      setCloseModal(true);
    }, 20000);
  }, []);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count === advertisinginfo.length - 1 ? 0 : count + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [count]);
  // console.log(count);
  // console.log(advertisinginfo);
  return (
    <>
      <div className={styles.advertising_parent}>
        <h4>Реклама</h4>
        <ul>
          {advertisinginfo.map((item) => (
            <li key={item.id}>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
              <button>{item.phone}</button>
            </li>
          ))}
        </ul>
      </div>
      {closeModal && (
        <div className={styles.advertising_mobile_version}>
          <ul>
            {
              <li>
                <h6>{advertisinginfo[count].title}</h6>
                <p>{advertisinginfo[count].text}</p>
                <button>{advertisinginfo[count].phone}</button>
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
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.46409 8.46458L15.5352 15.5356"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
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
