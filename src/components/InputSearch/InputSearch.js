import React, { useRef, useState } from "react";
import styles from "./InputSearch.module.css";
import x_krest from "../../assests/images/input/krestik.svg";
import search_img from "../../assests/images/input/Search.svg";

const InputSearch = ({ setInputState }) => {
  const styles_forInput = {
    width: "160px",
    height: "40px",
    border: "none",
    background: "transparent",
    borderRadius: "15px",
    fontSize: "22px",
    padding: " 0px 35px 0px 35px",
    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.5)",
    textAlign: "center",
    maxWidth: "850px",
  };
  const changeStateInput = () => {};
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const changeLengthInput = (e) => {
    setInput(e.target.value);
    inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
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
          ref={inputRef}
          placeholder="Поиск"
          className={styles.search_input}
          onChange={changeLengthInput}
          value={input}
          // style={styles_forInput}
        />
        <button onClick={clearInput} className={styles.lll}>
          <img src={x_krest} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
///////////////////////////////////////
