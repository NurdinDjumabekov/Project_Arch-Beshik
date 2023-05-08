import React, { useState } from "react";
import styles from "./InputSearch.module.css";
import x_krest from "../../assests/images/input/krestik.svg";
import search_img from "../../assests/images/input/Search.svg";

const InputSearch = ({ setInputState }) => {
  const [input, setInput] = useState("");
  const changeStateInput = () => {};
  const changeLengthInput = (e) => {
    setInput(e.target.value);
    if (e.target.scrollWidth <= 800) {
      e.target.style.width = 200;
      e.target.style.width = e.target.scrollWidth + 5 + "px";
    }
  };
  const clearInput = (e) => {
    setInput("");
    setInputState(false);
  };
  console.log(input);
  return (
    <div className={styles.parent_searchBlock}>
      <div>
        <button onClick={changeStateInput} className={styles.kkk}>
          <img src={search_img} alt="" />
        </button>
        <input
          placeholder="Поиск"
          className={styles.search_input}
          onChange={(e) => changeLengthInput(e)}
          value={input}
        />
        <button onClick={clearInput} className={styles.lll}>
          <img src={x_krest} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
