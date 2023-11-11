// MUI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// hooks
import Categories from "../Categories/Categories";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// components
import InputSearch from "../../Inputs/InputSearch/InputSearch";
// img
import logo from "../../../assets/images/logo.svg";
import menuIcon from "../../../assets/images/menu/menu.svg";
// styles
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const [look, setLook] = useState<boolean>(false);

  const handleAccordionToggle = () => {
    setLook(!look);
  };

  return (
    <>
      <div className={styles.navMenu__shadow}></div>
      <div className={styles.navMenu__back}>
        <Accordion expanded={look} onChange={handleAccordionToggle}>
          <div className={styles.navMenu}>
            <div className="container">
              <div className={styles.navMenu__inner}>
                <NavLink className={styles.logo} to={"/"}>
                  <img src={logo} alt={logo} />
                  <p>Арча Бешик</p>
                </NavLink>

                <div className={styles.account}>
                  <InputSearch />
                </div>

                <AccordionSummary
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <button
                    className={styles.btnMenu}
                    onClick={handleAccordionToggle}
                  >
                    <img src={menuIcon} alt="" />
                  </button>
                </AccordionSummary>
              </div>
            </div>
          </div>
          <AccordionDetails>
            <div className="container">
              <div className={styles.accordionBlock}>
                <Categories closeAccordion={handleAccordionToggle} />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default NavMenu;
