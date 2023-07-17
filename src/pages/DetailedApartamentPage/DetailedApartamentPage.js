import React, { useEffect, useState } from "react";
import styles from "./DetailedApartamentPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Advertising } from "../../components/Advertising/Advertising";
import Footer from "../../components/Footer/Footer";
import DetailedPhotos from "../../components/DetailedPhotos/DetailedPhotos";
import { changeBtnNavMiniDisplay } from "../../store/reducers/mainPageSlice";

const DetailedApartamentPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(changeBtnNavMiniDisplay(false));
    axios
      .get(`http://baielbekenov.pythonanywhere.com/api/housemanage_list/${id}/`)
      .then((info) => setData(info.data));
    dispatch(changeBtnNavMiniDisplay(true));
  }, []);
  console.log(data, "DetailedApartamentPage");
  return (
    <>
      <div className={styles.blockParent_detaliedApartament}>
        <div className="container">
          <div className="block_animations"></div>
          <div className="block_info">
            {/* <div className={styles.blockParent_detaliedApartament}>
              <DetailedPhotos date={data} />
              <div className={styles.content_apartament}>
                <div className={styles.content_apartament_inner}>
                  <div className={styles.number_phone}>
                    <h2>{data.owner}</h2>
                    <p>0{data.phone_number}</p>
                  </div>
                  <ul>
                    <li>
                      <h3>Информация</h3>
                    </li>
                    <li>
                      <p>Колличество комнат : </p>
                      <span>{data.amount_of_rooms}</span>
                    </li>
                    <li>
                      <p>Цена : </p>
                      <span>{data.price} coм</span>
                    </li>
                    <li>
                      <p>Ремонт : </p>
                      <span>{data.remont}</span>
                    </li>
                    <li>
                      <p>Удобства : </p>
                      <span>{data.udobstva} </span>
                    </li>
                  </ul>
                  <div className={styles.desceiption_text_apartament}>
                    <h4>{data.title}</h4>
                    <p>{data.description} </p>
                  </div>
                </div>
                <Advertising />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedApartamentPage;
