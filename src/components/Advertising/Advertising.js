import React from "react";
import styles from "./Advertising.module.css";

export const Advertising = () => {
  const advertisinginfo = [
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },

    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
    {
      id: 1,
      title: "тут наша реклама",
      text: "Если вам нужен сайт, то звоните на этот номер",
      phone: "+996700754454",
    },
  ];
  return (
    <div className={styles.advertising_parent}>
      <h4>Реклама</h4>
      <ul>
        {advertisinginfo.map((item) => (
          <li>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
            <button>{item.phone}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
