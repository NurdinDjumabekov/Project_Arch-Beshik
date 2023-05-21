import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.css";
import React from "react";
import { changePagination } from "../../store/infoWorkSlice";
import btnRight from "../../assests/images/pagination/btn_right.svg";
import btnLeft from "../../assests/images/pagination/btn_left.svg";

const Pagination = () => {
  const { objForChangeInfo } = useSelector((state) => state.infoWorkSlice);
  const dispatch = useDispatch();
  const itemsPerPage = 10; // Количество элементов на странице
  const totalItems = 100; // Общее количество элементов
  // const totalPages = Math.ceil(totalItems / itemsPerPage); // Общее количество страниц
  const totalPages = 5; // Общее количество страниц
  const handleClick = (pageNumber) => {
    dispatch(changePagination(pageNumber));
  };

  let pageNumbers = [];

  // Если текущая страница больше 4, скрыть первые две страницы и показать две страницы впереди
  if (objForChangeInfo.pagination > 4 && totalPages > 6) {
    const startPage = objForChangeInfo.pagination - 2;
    const endPage = objForChangeInfo.pagination + 2;

    if (endPage > totalPages) {
      pageNumbers = Array.from({ length: 5 }, (_, i) => totalPages - i);
      pageNumbers.reverse();
    } else {
      pageNumbers = Array.from({ length: 5 }, (_, i) => startPage + i);
    }
  } else {
    // Показать первые 5 страниц
    pageNumbers = Array.from(
      { length: Math.min(totalPages, 5) },
      (_, i) => i + 1
    );
  }
  const prevPaginaton = () => {
    if (objForChangeInfo.pagination > 1) {
      dispatch(changePagination(objForChangeInfo.pagination - 1));
    } else return;
  };
  const nextPaginaton = (e) => {
    if (objForChangeInfo.pagination < totalPages) {
      dispatch(changePagination(objForChangeInfo.pagination + 1));
    } else return;
  };
  // console.log(objForChangeInfo.pagination, "objForChangeInfo.pagination");
  return (
    <div className={styles.pagination_parentBlock}>
      <div className={styles.pagination_parentChild}>
        <button onClick={prevPaginaton}>
          <img src={btnLeft} alt="" />
        </button>
        <div>
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={
                objForChangeInfo.pagination === number ? styles.activeBtn : ""
              }
              onClick={() => handleClick(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <button onClick={nextPaginaton}>
          <img src={btnRight} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
