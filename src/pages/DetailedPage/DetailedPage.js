import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailedPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeSkeleton } from "../../store/infoWorkSlice";
import Preloader from "../../components/Preloader/Preloader";
import DetailedPhotos from "../../components/DetailedPhotos/DetailedPhotos";
import { Advertising } from "../../components/Advertising/Advertising";
import Footer from "../../components/Footer/Footer";
import AddComments from "../../components/comments/AddComments/AddComments";
import AllComments from "../../components/comments/AllComments/AllComments";

const DetailedPage = () => {
  const [date, setDate] = useState({});
  const { id } = useParams();
  const dateComents = date.comments;
  const dispatch = useDispatch();
  const { stateSkeleton } = useSelector((state) => state.infoWorkSlice);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(changeSkeleton(false));
    axios
      .get(`http://baielbekenov.pythonanywhere.com/api/content_detail/${id}/`)
      .then((date) => setDate(date.data.content));
    dispatch(changeSkeleton(true));
  }, []);
  // console.log(date);

  return (
    <>
      {stateSkeleton ? (
        <div className={styles.blockParent_for_detalied}>
          <div className="container">
            <div className="block_animations"></div>
            <div className="block_info">
              <div className={styles.parent_blockDetail}>
                <DetailedPhotos date={date} />
                <div className={styles.block_delailedInfo_and_advertising}>
                  <div className={styles.contentBlock_detailed}>
                    <div className={styles.block_for_contentText}>
                      <h1>{date?.title}</h1>
                      <p>{date?.content}</p>
                    </div>
                    <AllComments dateComents={dateComents} />
                    <AddComments />
                  </div>
                  <Advertising />
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
