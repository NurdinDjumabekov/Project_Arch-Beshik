import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./MainPage.module.css";
import EveryCard from "../../components/EveryCard/EveryCard";
import MenuBigDisplay from "../../components/MenuBigDisplay/MenuBigDisplay";
import Preloader from "../../components/Preloader/Preloader";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import { toTakeCardInfo } from "../../store/reducers/mainPageSlice";
import { searchData } from "../../store/reducers/windowsSlice";
import Pagination from "../../components/Pagination/Pagination";
const MainPage = () => {
  const { nameTitle } = useSelector((state) => state.stateForMenuSlice);
  ////////////////////////////////////////
  const dispatch = useDispatch();

  const {
    dataCards,
    titleName,
    statePreloader,
    stateForLookSlider,
    paginationCards,
  } = useSelector((state) => state.mainPageSlice);
  useEffect(() => {
    dispatch(toTakeCardInfo(paginationCards));
    window.scrollTo(0, 0);
  }, [paginationCards]);
  return (
    <>
      {statePreloader ? (
        <>
          {stateForLookSlider && <Slider />}
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.header_textMain}>
                <h2>
                  {nameTitle === "Новостная лента" ? (
                    <> Новостная лента </>
                  ) : (
                    titleName
                  )}
                </h2>
              </div>
              <div className={styles.block_for_content}>
                <div className={styles.cards_block}>
                  {dataCards?.length === 0 ? (
                    <h3 className={styles.no_posts}>Постов пока что нету</h3>
                  ) : (
                    dataCards?.map((cardInfo) => (
                      <EveryCard key={cardInfo.id} cardInfo={cardInfo} />
                    ))
                  )}
                </div>
                <MenuBigDisplay />
              </div>
              <div className={styles.pagination}>
                {/* <Pagination allPage={dataCards?.length} /> */}
                <Pagination allPage={200} />
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Preloader />
        </>
      )}
    </>
  );
};

export default MainPage;
