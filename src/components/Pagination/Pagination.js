import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styles from "./Pagination.module.css";
import btnRight from "../../assests/images/pagination/btn_right.svg";
import btnLeft from "../../assests/images/pagination/btn_left.svg";

const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.pagination_parentBlock}>
      <div className={styles.pagination_parentChild}>
        <button>
          <img src={btnLeft} alt="" />
        </button>
        <div></div>
        <button>
          <img src={btnRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
