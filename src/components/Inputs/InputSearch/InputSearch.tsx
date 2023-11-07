import React, { useEffect, useState } from "react";
import loop from "../../../assets/images/inputs/loop_search.svg";
import cross from "../../../assets/images/inputs/krestik.svg";
import styles from './InputSearch.module.scss';
import { useAppSelector } from "../../../hook";
import { NavLink } from "react-router-dom";

const InputSearch = () => {
  const [lookIcos, setLookIcos] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const { stateContentList } = useAppSelector((state) => state.mainPageSlice)

  useEffect(() => {
    if (search === "") {
      setLookIcos(false);
    } else {
      setLookIcos(true);
    }
  }, [search]);


  const clearInput = () => {
    setSearch("")
  }


  console.log(search);
  console.log(stateContentList);

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
        <div className={styles.searchData}>
          {search === "" ? "" : <div>
            {stateContentList?.map((i) => i.title.includes(search) ?
              <NavLink to={`/detailed/${i.id}`} key={i.id} onClick={clearInput}>{i.title}</NavLink> : "")}</div>}
        </div >
      </label>
    </>
  );
};


export default InputSearch