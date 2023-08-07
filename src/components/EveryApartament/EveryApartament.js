import React from "react";
import styles from "./EveryApartament.module.css";
import { NavLink } from "react-router-dom";

const EveryApartament = ({ apartamentInfo }) => {
  console.log(apartamentInfo, "apartamentInfo");
  return (
    <>
      <div className={styles.everyApartament__wrapper}>
        <div className={styles.blockParent_Apartament}>
          <div className="container">
            <div className={styles.childBlock_apartament}>
              <div className={styles.childBlock_apartament_texts}>
                <div className={styles.everyBlock_info}>
                  <div>
                    <img src={apartamentInfo.photoss} alt="фотка" />
                  </div>
                  <div className={styles.textComtent_apartement}>
                    <h2>{apartamentInfo?.price} сом</h2>
                    <p>{apartamentInfo?.title}</p>
                  </div>
                  <button>
                    <NavLink to={`/housemanage/${apartamentInfo.id}`}>
                      Узнать больше
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EveryApartament;
