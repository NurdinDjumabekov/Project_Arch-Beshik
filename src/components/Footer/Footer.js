import React from "react";
import insta from "../../assests/images/Footer/insta.svg";
import facebook from "../../assests/images/Footer/facebook.svg";
import whatApp from "../../assests/images/Footer/whatApp.svg";
import telega from "../../assests/images/Footer/telega.svg";
import mainicon from "../../assests/images/main_icon.svg";
import ornament from "../../assests/images/Footer/ornament.png";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer_parent}>
      <div className="container">
        <div className={styles.footer_child}>
          <div className={styles.footer_inner}>
            <div className={styles.link_info}>
              <div>
                <img src={mainicon} alt="" />
              </div>
              <h6>Арча Бешик</h6>
            </div>
            <ul>
              <li>
                <p>Реклама на сайте</p>
                <span>+996 200 200 200</span>
              </li>
              <li>
                <p>Есть идеи? </p>
                <span>+996 300 300 300</span>
              </li>
              <li>
                <p>Команда разработки</p>
                <span>10 Мая</span>
              </li>
            </ul>
            <div className={styles.block_footerIcon}>
              <ul>
                <li>
                  <a href="">
                    <img src={telega} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={whatApp} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={insta} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={facebook} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.block_for_ornament}>
            <img src={ornament} alt="orr" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
