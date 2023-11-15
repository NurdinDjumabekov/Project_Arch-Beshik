import React from "react";
import styles from "./BtnMenu.module.scss";
import menuIcon from "../../../assets/images/menu/menu.svg";

interface stateProps {
  closeAccordion: React.MouseEventHandler;
  look: boolean;
}

const BtnMenu: React.FC<stateProps> = ({ look, closeAccordion }) => {
  return (
    <button className={styles.btnMenu} onClick={closeAccordion}>
      <img src={menuIcon} alt="|||" className={look ? styles.imgNone : ""} />
      {look && (
        <>
          <div
            className={`${styles.line1} ${look ? styles.lineActive1 : ""}`}
          ></div>
          <div
            className={`${styles.line2} ${look ? styles.lineActive2 : ""}`}
          ></div>
          <div
            className={`${styles.line3} ${look ? styles.lineActive3 : ""}`}
          ></div>
        </>
      )}
    </button>
  );
};

export default BtnMenu;
