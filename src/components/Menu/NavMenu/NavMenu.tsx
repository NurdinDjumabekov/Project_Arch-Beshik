import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { NavLink } from "react-router-dom";
import InputSearch from "../../Inputs/InputSearch/InputSearch";
import Categories from "../Categories/Categories";
import logo from "../../../assets/images/logo.svg";
import styles from "./NavMenu.module.scss";
import BtnMenu from "../BtnMenu/BtnMenu";

const NavMenu = () => {
  const [look, setLook] = React.useState<boolean>(false);
  const accordionRef = React.useRef<any>(null);

  const handleAccordionToggle = () => {
    setLook(!look);
  };

  React.useEffect(() => {
    const handleClickOutsideAccordion = (e: MouseEvent) => {
      if (look && !accordionRef.current.contains(e.target as Node)) {
        setLook(false);
      }
    };

    document.addEventListener("click", handleClickOutsideAccordion);

    return () => {
      document.removeEventListener("click", handleClickOutsideAccordion);
    };
  }, [look]);

  return (
    <>
      <div className={styles.navMenu__shadow}></div>
      <div className={styles.navMenu__back}>
        <Accordion
          ref={accordionRef}
          expanded={look}
          onChange={handleAccordionToggle}
        >
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
                  <BtnMenu look={look} closeAccordion={handleAccordionToggle}/>
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
