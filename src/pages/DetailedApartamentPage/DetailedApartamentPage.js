import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DetailedApartamentPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Advertising } from "../../components/Advertising/Advertising";
import Footer from "../../components/Footer/Footer";
import DetailedPhotos from "../../components/DetailedPhotos/DetailedPhotos";
import { changeBtnNavMiniDisplay } from "../../store/reducers/mainPageSlice";
import { toTakeDetailedApartament } from "../../store/reducers/houseManageSlice";

const DetailedApartamentPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dataEveryApartaments } = useSelector(
    (state) => state.houseManageSlice
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toTakeDetailedApartament(id));
  }, []);

  // console.log(dataEveryApartaments, "dataEveryApartaments");
  return (
    <>
      <div className={styles.blockParent_detaliedApartament}>
        <div className="container">
          <div className="block_animations"></div>
          <div className="block_info">
            <div className={styles.blockInner_detaliedApartament}>
              <div>
                <DetailedPhotos data={dataEveryApartaments} />
              </div>
              <div className={styles.content_apartament}>
                <div className={styles.content_apartament_inner}>
                  <div className={styles.number_phone}>
                    <h2>{dataEveryApartaments.owner}</h2>
                    <p>0{dataEveryApartaments.phone_number}</p>
                  </div>
                  <ul>
                    <li>
                      <h3>Информация</h3>
                    </li>
                    <li>
                      <p>Колличество комнат : </p>
                      <span>{dataEveryApartaments.amount_of_rooms}</span>
                    </li>
                    <li>
                      <p>Цена : </p>
                      <span>{dataEveryApartaments.price} coм</span>
                    </li>
                    <li>
                      <p>Ремонт : </p>
                      <span>{dataEveryApartaments.remont}</span>
                    </li>
                    <li>
                      <p>Удобства : </p>
                      <span>{dataEveryApartaments.udobstva}</span>
                    </li>
                  </ul>
                  <div className={styles.desceiption_text_apartament}>
                    <h4>{dataEveryApartaments.title}</h4>
                    <p>{dataEveryApartaments.description}</p>
                  </div>
                </div>
                <Advertising />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailedApartamentPage;
