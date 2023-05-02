import React, { useState } from "react";
import styles from "./InputSearch.module.css";
import { useDispatch } from "react-redux";
import {
  changeSearchInput,
  falsePreloaderOutput,
} from "../../store/infoWorkSlice";
const InputSearch = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const changeStateInput = () => {
    dispatch(changeSearchInput(input));
    dispatch(falsePreloaderOutput());
  };
  //   console.log(input);
  return (
    <div className={styles.parent_searchBlock}>
      <input
        placeholder="Поиск"
        type="search"
        className={styles.search_input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={changeStateInput}>Поиск</button>
    </div>
  );
};

export default InputSearch;
