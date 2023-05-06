import React from "react";
import styles from "./DetailedApartamentPage.module.css";
import imgs from "../../assests/images/history/history_img.png";

const DetailedApartamentPage = () => {
  return (
    <div className={styles.blockParent_detaliedApartament}>
      <div className="container">
        <div className="block_animations"></div>
        <div className="block_info">
          <div className={styles.blockParent_detaliedApartament}>
            <div className={styles.block_forImgs}>
              <div>
                <img src={imgs} alt="" />
              </div>
              <div>
                <div>
                  <img src={imgs} alt="" />
                </div>
                <div>
                  <img src={imgs} alt="" />
                </div>
              </div>
            </div>
            <div className={styles.content_apartament}>
              <div className={styles.content_apartament_inner}>
                <div className={styles.number_phone}>
                  <h2>Эрлан Сабиров </h2>
                  <p>+996700754454</p>
                </div>
                <ul>
                  <li>
                    <h3>Информация</h3>
                  </li>
                  <li>
                    <p>Колличество комнат : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Этаж : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Подселение : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Кто сдает : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Животные : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Ремонт : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>На срок : </p>
                    <span></span>
                  </li>
                  <li>
                    <p>Удобства : </p>
                    <span>
                      Кондиционер, балкон, бронированные двери, гардероб,
                      домофон, интернет, WI-FI, кабельное, пластиковые окна.
                    </span>
                  </li>
                </ul>
                <div className={styles.desceiption_text_apartament}>
                  <h4> Описание</h4>
                  <p>
                    Предлагаем вам комфортную 3-комнатную квартиру 104 -Серии, в
                    районе Центральной Мечети. Квартира с хорошим ремонтом.
                  </p>
                </div>
              </div>
              <div className={styles.apartament_advertising}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedApartamentPage;
