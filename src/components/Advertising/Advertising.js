import React, { useEffect, useState } from "react";
import styles from "./Advertising.module.css";
import axios from "axios";

export const Advertising = () => {
  const advertisinginfo = [
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 2,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 3,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 4,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
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
  }, []);
  return (
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
  );
};
