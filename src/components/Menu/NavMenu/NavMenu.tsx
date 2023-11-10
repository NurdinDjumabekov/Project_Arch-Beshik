import styles from './NavMenu.module.scss';
import logo from '../../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import menuIcon from '../../../assets/images/menu/menu.svg';
import InputSearch from '../../Inputs/InputSearch/InputSearch';
import Categories from '../Categories/Categories';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useAppSelector } from '../../../hook';

const NavMenu = () => {
  const { stateCategory } = useAppSelector((state) => state.mainPageSlice);

  return (
    <>
      <div className={styles.navMenu__shadow}></div>
      <div className={styles.navMenu__back}>
        <Accordion>
          <div className={styles.navMenu}>
            <div className="container">
              <div className={styles.navMenu__inner}>
                <NavLink className={styles.logo} to={'/'}>
                  <img src={logo} alt={logo} />
                  <p>Арча Бешик</p>
                </NavLink>

                <div className={styles.account}>
                  <InputSearch />
                </div>

                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <button className={styles.btnMenu}>
                    <img src={menuIcon} alt="" />
                  </button>
                </AccordionSummary>
              </div>
            </div>
          </div>
          <AccordionDetails style={{ boxShadow: 'none' }}>
            <div className="container">
              <div className={styles.accordionBlock}>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <button>gooo</button>
                  <Categories />
                </AccordionSummary>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default NavMenu;
