import React, { useState } from "react";
import styles from "./InputSearch.module.css";

const InputSearch = () => {
  const [input, setInput] = useState("");
  const changeStateInput = () => {};
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
