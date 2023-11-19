import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hook";
import { detailedApartement } from "../../store/reducers/detailedSlice";
import styles from "./ApartamentPage.module.scss";
import SliderPhoto from "../../components/Detailed/SliderPhoto/SliderPhoto";

const ApartamentPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { stateHousemanage } = useAppSelector((state) => state.detailedSlice);

  React.useEffect(() => {
    dispatch(
      detailedApartement({
        url: `housemanage_list/${id}`,
        lang: "ru",
        type: "GET",
      })
    );
  }, []);

  console.log(stateHousemanage);

  return (
    <div className={styles.detailedHouse}>
      <div className="container">
        <div className={styles.detailedHouse__inner}>
          <SliderPhoto photos={stateHousemanage.photos} />
          <div className={styles.detailedHouse__mainText}>
            <h4>{stateHousemanage?.title}</h4>
            <p>{stateHousemanage?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartamentPage;
