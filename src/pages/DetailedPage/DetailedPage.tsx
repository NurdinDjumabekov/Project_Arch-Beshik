import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { toTakeDetailed } from "../../store/reducers/detailedSlice";
import styles from "./DetailedPage.module.scss";
import SliderPhoto from "../../components/Detailed/SliderPhoto/SliderPhoto";
import Comments from "../../components/Detailed/Comments/Comments";

const DetailedPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { stateMainDetailed } = useAppSelector((state) => state.detailedSlice);

  React.useEffect(() => {
    dispatch(
      toTakeDetailed({ url: `content_detail/${id}`, lang: "ru", type: "GET" })
    );
    // dispatch(
    //   detailedApartement({
    //     url: `content_detail/${id}`,
    //     lang: "ru",
    //     type: "GET",
    //   })
    // );
  }, []);

  return (
    <div className={styles.detailed}>
      <div className="container">
        <div className={styles.detailed__inner}>
          <SliderPhoto photos={stateMainDetailed.photos} />
          <div className={styles.detailed__mainText}>
            <h4>{stateMainDetailed?.title}</h4>
            {/* <p>{stateMainDetailed?.content}</p> */}
          </div>
        </div>
        <Comments
          comments={stateMainDetailed?.comments}
          id={stateMainDetailed?.id}
        />
      </div>
    </div>
  );
};

export default DetailedPage;
