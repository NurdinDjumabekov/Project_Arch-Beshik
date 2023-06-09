import React from "react";
import styles from "./EveryApartament.module.css";
import { NavLink } from "react-router-dom";

const EveryApartament = ({ apartamentInfo }) => {
  return (
    <>
      <div className={styles.everyApartament__wrapper}>
        <div className={styles.blockParent_Apartament}>
          <div className="container">
            <div className={styles.childBlock_apartament}>
              <div className={styles.childBlock_apartament_texts}>
                <div className={styles.everyBlock_info}>
                  <div>
                    <img src={apartamentInfo.photos} alt="фотка" />
                  </div>
                  <div className={styles.textComtent_apartement}>
                    <h2>23000 сом</h2>
                    <p>3x комнатная квартира на улицу Бая</p>
                  </div>
                  <button>
                    <NavLink to={`/housemanage/${apartamentInfo.id}/`}>
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
