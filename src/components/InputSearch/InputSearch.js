import React, { useEffect, useRef, useState } from "react";
import styles from "./InputSearch.module.css";
import x_krest from "../../assests/images/input/krestik.svg";
import search_img from "../../assests/images/input/Search.svg";

const InputSearch = ({ setInputState }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    adjustInputWidth();
    window.addEventListener("resize", adjustInputWidth); // Обработчик изменения размеров окна
    return () => {
      window.removeEventListener("resize", adjustInputWidth); // Удаление обработчика при размонтировании компонента
    };
  }, [input]);

  const adjustInputWidth = () => {
    if (inputRef.current) {
      inputRef.current.style.width = "200px"; // Сброс ширины на авто для корректного измерения ширины содержимого
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  };

  const changeLengthInput = (e) => {
    setInput(e.target.value);
  };

  const clearInput = (e) => {
    setInput("");
    setInputState(false);
  };

  return (
    <div className={styles.parent_searchBlock}>
      <div>
        <button onClick={adjustInputWidth} className={styles.searchIconBtn}>
          <img src={search_img} alt="" />
        </button>
        <input
          ref={inputRef}
          placeholder="Поиск"
          className={styles.search_input}
          onChange={changeLengthInput}
          value={input}
        />
        <button onClick={clearInput} className={styles.clearInput}>
          <img src={x_krest} alt="" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
