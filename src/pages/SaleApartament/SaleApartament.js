import React from "react";
import styles from "./SaleApartament.module.css";
import imgs from "../../assests/images/history/history_img.png";

const SaleApartament = () => {
  return (
    <div className={styles.blockParent_Apartament}>
      <div className="container">
        <div className="block_animations"></div>
        <div className="block_info">
          <h1>Продажа домов и квартир</h1>
          <div className={styles.childBlock_apartament}>
            <ul>
              <li>
                <div className={styles.everyBlock_info}>
                  <div>
                    <img src={imgs} alt="фотка" />
                  </div>
                  <div className={styles.textComtent_apartement}>
                    <h2>23000 сом</h2>
                    <p>3x комнатная квартира на улицу Бая</p>
                  </div>
                  <button>Узнать больше</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleApartament;
