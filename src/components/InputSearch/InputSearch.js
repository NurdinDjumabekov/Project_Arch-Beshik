import React, { useEffect, useRef, useState } from "react";
import styles from "./InputSearch.module.css";
import x_krest from "../../assests/images/input/krestik.svg";
import search_img from "../../assests/images/input/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStateForLookSlider,
  searchData,
  toTakeCardInfo,
} from "../../store/reducers/mainPageSlice";
import {
  changeLookDataSearch,
  toTakeAllData,
} from "../../store/reducers/otherAllStateSlice";
import { useLocation, useNavigate } from "react-router-dom";

const InputSearch = ({ setInputState }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const searchButtonRef = useRef(null);
  const closedRef = useRef(null);
  const choiceRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { dataForComparison, lookDataSearch } = useSelector(
    (state) => state.otherAllStateSlice
  );

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
      inputRef.current.style.width = "250px";
      inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
    }
  };

  const changeLengthInput = (e) => {
    setInput(e.target.value);
  };

  const clearInputFN = () => {
    setInput("");
    dispatch(toTakeCardInfo(1));
    setInputState(false);
    dispatch(changeStateForLookSlider(true));
  };

  const handleClickOutside = (e) => {
    if (
      !inputRef.current.contains(e.target) &&
      !searchButtonRef.current.contains(e.target) &&
      !closedRef.current.contains(e.target)
    ) {
      setInputState(false);
    }
  };

  const handleSearchClick = () => {
    addWidthInput();
    dispatch(searchData());
    dispatch(changeStateForLookSlider(false));
  };

  useEffect(() => {
    if (input === "") {
      dispatch(changeStateForLookSlider(true));
      dispatch(toTakeCardInfo(1));
      dispatch(changeLookDataSearch(false));
    } else {
      dispatch(changeLookDataSearch(true));
    }
  }, [input]);

  useEffect(() => {
    dispatch(toTakeAllData());
  }, []);

  const clickSearchData = (id) => {
    dispatch(changeLookDataSearch(false));
    if (location.pathname.includes("content_detail")) {
      navigate(`/`);
      setTimeout(() => {
        navigate(`/content_detail/${id}`);
      }, 100);
    } else {
      navigate(`/content_detail/${id}`);
    }
    setInput("");
  };

  return (
    <div className={styles.parent_searchBlock}>
      <div ref={searchButtonRef}>
        <button onClick={handleSearchClick} className={styles.searchIconBtn}>
          <img src={search_img} alt="" />
        </button>
        <input
          ref={inputRef}
          placeholder="Поиск"
          className={styles.search_input}
          onChange={changeLengthInput}
          value={input}
        />
        <button
          ref={closedRef}
          onClick={() => clearInputFN()}
          className={styles.clearInput}
        >
          <img src={x_krest} alt="" />
        </button>
        {lookDataSearch && (
          <label className={styles.selectSearch}>
            {dataForComparison?.map((item) =>
              item.title
                .toLocaleLowerCase()
                .includes(input.toLocaleLowerCase()) ? (
                <p key={item.id} onClick={() => clickSearchData(item.id)}>
                  {item.title}
                </p>
              ) : null
            )}
            {dataForComparison?.every(
              (item) =>
                !item.title
                  .toLocaleLowerCase()
                  .includes(input.toLocaleLowerCase())
            ) && <p>нет результатов</p>}
          </label>
        )}
      </div>
    </div>
  );
};

export default InputSearch;
