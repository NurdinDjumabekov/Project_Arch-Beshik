import React, { useEffect, useRef, useState } from "react";
import styles from "./InputSearch.module.css";
import x_krest from "../../assests/images/input/krestik.svg";
import search_img from "../../assests/images/input/Search.svg";
import { useDispatch, useSelector } from "react-redux";

const InputSearch = ({ setInputState }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    addWidthInput();
    window.addEventListener("resize", addWidthInput);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", addWidthInput);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [input]);

  const addWidthInput = () => {
    if (inputRef.current) {
      inputRef.current.style.width = "200px";
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  };
  const changeLengthInput = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const clearInput = () => {
    setInput("");
    setInputState(false);
  };

  const handleClickOutside = (e) => {
    if (
      !inputRef.current.contains(e.target) &&
      !searchButtonRef.current.contains(e.target)
    ) {
      setInputState(false);
    }
  };
  const handleSearchClick = () => {
    addWidthInput();
  };
  useEffect(() => {
    // if (input === "") {
    //   dispatch(infoWorkOutput(objForChangeInfo));
    // }
  }, [input]);

  return (
    <div className={styles.parent_searchBlock}>
      <div>
        <button
          ref={searchButtonRef}
          onClick={handleSearchClick}
          className={styles.searchIconBtn}
        >
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
