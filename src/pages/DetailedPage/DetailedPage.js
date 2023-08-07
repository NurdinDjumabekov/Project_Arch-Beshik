import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import DetailedPhotos from "../../components/DetailedPhotos/DetailedPhotos";
import { Advertising } from "../../components/Advertising/Advertising";
import Footer from "../../components/Footer/Footer";
import AddComments from "../../components/comments/AddComments/AddComments";
import AllComments from "../../components/comments/AllComments/AllComments";
import {
  changeBtnNavMiniDisplay,
  changePreloader,
} from "../../store/reducers/mainPageSlice";
import { toTakeDetailedInfo } from "../../store/reducers/otherAllStateSlice";

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { statePreloader } = useSelector((state) => state.mainPageSlice);
  const { dataDetailedPage } = useSelector((state) => state.otherAllStateSlice);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeDetailedInfo({ id }));
  }, [statePreloader]);

  return (
    <>
      {statePreloader ? (
        <div className={styles.blockParent_for_detalied}>
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.parent_blockDetail}>
                <DetailedPhotos data={dataDetailedPage} />
                <div className={styles.block_delailedInfo_and_advertising}>
                  <div className={styles.advertising_mobile}>
                    <Advertising />
                  </div>
                  <div className={styles.contentBlock_detailed}>
                    <div className={styles.block_for_contentText}>
                      <h1>{dataDetailedPage?.title}</h1>
                      <p>{dataDetailedPage?.content}</p>
                    </div>
                    <AllComments data={dataDetailedPage} />
                    <AddComments id={id} />
                  </div>
                  <div className={styles.advertising_desktop}>
                    <Advertising />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default DetailedPage;
