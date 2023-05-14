import React from "react";
import styles from "./AddApartaments.module.css";

const AddApartaments = ({
  setOwner,
  setAmount,
  setPhoneNum,
  setRemont,
  setUdobstva,
  setPrice,
}) => {
  return (
    <>
      <input
        onChange={(e) => setOwner(e.target.value)}
        placeholder="ФИО владельца"
      />
      <input
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Количество комнат"
      />
      <input
        onChange={(e) => setPhoneNum(e.target.value)}
        type="number"
        placeholder="Номер телефона"
      />
      <input onChange={(e) => setRemont(e.target.value)} placeholder="Ремонт" />
      <input
        onChange={(e) => setUdobstva(e.target.value)}
        placeholder="Удобства"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Цена квартиры в сомах"
        type="number"
      />
    </>
  );
};

export default AddApartaments;
