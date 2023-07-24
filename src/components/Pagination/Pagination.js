import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import btnRight from "../../assests/images/pagination/btn_right.svg";
import btnLeft from "../../assests/images/pagination/btn_left.svg";
import { changePaginationCards } from "../../store/reducers/mainPageSlice";
import { TransformationPages } from "../../helpers/TransformationPages";

const Pagination = ({ allPage }) => {
  const dispatch = useDispatch();
  const [pageArr, setPageArr] = useState([]);
  const { paginationCards } = useSelector((state) => state.mainPageSlice);
  useEffect(() => {
    for (let i = 1; i <= allPage; i++) {
      setPageArr((prev) => prev, pageArr.push(i));
    }
    setPageArr(TransformationPages(pageArr, paginationCards));
  }, [paginationCards]);
  const increment = () => {
    if (paginationCards < allPage) {
      dispatch(changePaginationCards(paginationCards + 1));
    } else {
      return;
    }
  };

  const decrement = () => {
    if (paginationCards > 1) {
      dispatch(changePaginationCards(paginationCards - 1));
    } else {
      return;
    }
  };

  // console.log(pageArr, "pageArr");
  return (
    <div className={styles.pagination_parentBlock}>
      <div className={styles.pagination_parentChild}>
        <button onClick={decrement}>
          <img src={btnLeft} alt="" />
        </button>
        <div>
          {pageArr?.map((page) => (
            <button
              key={page}
              onClick={() => dispatch(changePaginationCards(page))}
              className={page === paginationCards ? styles.active_btn : ""}
            >
              {page}
            </button>
          ))}
        </div>
        <button onClick={increment}>
          <img src={btnRight} alt="btnRight" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
