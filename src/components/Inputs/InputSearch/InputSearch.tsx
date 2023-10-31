import React, { useEffect, useState } from "react";
import loop from "../../../assets/images/inputs/loop_search.svg";
import cross from "../../../assets/images/inputs/krestik.svg";
// import { useDispatch, useSelector } from "react-redux";
import styles from './InputSearch.module.scss';

const InputSearch = () => {
  const [lookIcos, setLookIcos] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (search === "") {
      setLookIcos(false);
    } else {
      setLookIcos(true);
    }
  }, [search]);

//   useEffect(() => {
//     dispatch(changeSearch(""));
//   }, [langData]);

  return (
    <>
      <label className={styles.blockSearch}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        //   placeholder={t("search")}
          placeholder="Поиск"
          value={search}
        />
        {lookIcos ? (
          <label
            onClick={() => setSearch("")}
            className={styles.search__cross}
          >
            <img src={cross} alt="x" />
          </label>
        ) : (
          <label className={styles.search__loop}>
            <img src={loop} alt="0" />
          </label>
        )}
      </label>
    </>
  );
};


export default InputSearch